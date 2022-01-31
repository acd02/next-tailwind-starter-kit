import { AnimationResult, SpringValue, useSpring, useTransition } from '@react-spring/web'
import type { Bin } from 'd3-array'
import type { ScaleLinear } from 'd3-scale'
import type { WeatherEntry } from 'data/types'
import type { SpringStatus } from 'stores/springStatus'
import { sleep } from 'utils/function'

import { getBinStyles } from './utils'

type TransitionSpring = {
  x: number
  width: number
  y: number
  height: number
  fill: string
  opacity: number
  textDX: number
}

type Props = {
  xScale: ScaleLinear<number, number, never>
  yScale: ScaleLinear<number, number, never>
  bins: Bin<WeatherEntry, number>[]
  boundedHeight: number
  meanValue: number
  onRest: (arg: AnimationResult<SpringValue>) => void
  springsStatus: SpringStatus
}

function useReactSprings({
  xScale,
  yScale,
  bins,
  boundedHeight,
  springsStatus,
  meanValue: meanValueProp,
  onRest: onRestProp,
}: Props) {
  const binsStylesMapper: Record<string, Omit<TransitionSpring, 'opacity' | 'fill'>> = {}
  bins.forEach(bin => {
    if (!bin.length) return
    const binStyles = getBinStyles({
      bin,
      xScale,
      yScale,
      boundedHeight,
    })

    /* eslint-disable fp/no-mutation */
    binsStylesMapper[bin[0].date] = {
      ...binStyles,
      textDX: binStyles.width / 2,
    }
  })

  const transition = useTransition(bins, {
    keys: bin => bin[0].date,
    onRest: onRestProp,
    from: bin => {
      const { x, width, textDX } = binsStylesMapper[bin[0].date]

      return {
        x,
        width,
        y: boundedHeight,
        height: 0,
        fill: '#22c55e',
        opacity: 0,
        textDX,
      }
    },
    enter: bin => async next => {
      const { x, width, textDX, y, height } = binsStylesMapper[bin[0].date]
      await sleep(springsStatus === 'ready' ? 1800 : 0)

      await next({ opacity: 1 })
      await next({ x, width, textDX })
      await next({ y, height, fill: '#3b82f6' })
    },
    update: bin => async next => {
      const { x, width, textDX, y, height } = binsStylesMapper[bin[0].date]
      await sleep(springsStatus === 'ready' ? 1000 : 0)

      await next({ opacity: 1 })
      await next({ x, width, textDX })
      await next({ y, height })
      await next({ fill: '#3b82f6' })
    },
    leave: () => {
      return [
        { fill: '#ef4444', opacity: 0 },
        { y: boundedHeight, height: 0 },
      ]
    },
  })

  const meanSpring = useSpring({
    x: xScale(meanValueProp),
  })

  return {
    meanSpring,
    transition,
  }
}

export default useReactSprings
export type { TransitionSpring }
