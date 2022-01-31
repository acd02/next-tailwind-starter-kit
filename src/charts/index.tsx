import { animated } from '@react-spring/web'
import { AxisBottom } from '@visx/axis'
import { scaleLinear } from '@visx/scale'
import { bin as D3Bin, extent, max, mean } from 'd3-array'
import { data } from 'data/index'
import type { Metric, WeatherEntry } from 'data/types'
import { metricsMapper } from 'data/utils'
import { useRerender } from 'hooks/useReRender'
import React, { useCallback, useMemo } from 'react'
import { useSpringStatus } from 'stores/springStatus'

import useSprings, { TransitionSpring } from './useSprings'
import { getBinStyles, getDimensions, yAccessor } from './utils'

type Props = {
  width: number
  height: number
  metric: Metric
}

function Chart({ width: parentWidth, metric }: Props) {
  const width = parentWidth * 0.8
  const height = width * 0.6

  const xAccessor = useCallback((d: WeatherEntry) => d[metric], [metric])

  useRerender([width, height])

  const { margin, boundedWidth, boundedHeight } = getDimensions({
    width,
    height,
  })

  const xScale = useMemo(
    () =>
      scaleLinear<number>({
        domain: extent(data, xAccessor) as [number, number],
        range: [0, boundedWidth],
        nice: true,
      }),
    [boundedWidth, xAccessor]
  )

  const binGenerator = D3Bin<WeatherEntry, number>()
    .domain(xScale.domain() as [number, number])
    .value(xAccessor)
    .thresholds(12)

  const bins = binGenerator(data)

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        domain: [0, max(bins, yAccessor) as number],
        range: [boundedHeight, 0],
        nice: true,
      }),
    [boundedHeight, bins]
  )

  const axisBottomLabel = (
    <text textAnchor="middle" y={boundedHeight} x={boundedWidth / 2} dy={50}>
      {metricsMapper[metric]}
    </text>
  )

  const meanValue = mean(data, xAccessor) as number

  const { setSpringsStatus, springsStatus } = useSpringStatus()

  const { meanSpring, transition } = useSprings({
    xScale,
    yScale,
    bins,
    boundedHeight,
    meanValue,
    springsStatus,
    onRest: ({ finished }) =>
      finished && springsStatus === 'idle' && setSpringsStatus('ready'),
  })

  const meanLineX =
    springsStatus === 'ready'
      ? { style: meanSpring }
      : { transform: `translate(${xScale(meanValue)})` }

  const meanLine = (
    <animated.g {...meanLineX}>
      <line
        y1={0}
        y2={boundedHeight}
        stroke="#f59e0b"
        strokeWidth={2}
        strokeDasharray="8 4"
      />
      <text className="text-xs md:text-sm" fill="#f59e0b" textAnchor="middle" dy={-10}>
        mean
      </text>
    </animated.g>
  )

  return (
    <div className="relative" /* needed for the tooltip */>
      <svg width={width} height={height} role="figure">
        <title>Histogram looking at the distribution of {metricsMapper[metric]}</title>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {transition((transitionSpring, bin) => {
            const { opacity, ...spring } = transitionSpring as TransitionSpring
            const binStyles = getBinStyles({
              bin,
              xScale,
              yScale,
              boundedHeight,
            })

            const groupStyles =
              springsStatus === 'ready' ? spring : { ...binStyles, fill: '#3b82f6' }

            const barStyles =
              springsStatus === 'ready'
                ? { width: spring.width, height: spring.height }
                : { width: binStyles.width, height: binStyles.height }

            return (
              <animated.g style={{ ...groupStyles }}>
                <animated.text
                  className="text-xs md:text-sm"
                  fill="#475569"
                  textAnchor="middle"
                  opacity={opacity}
                  dx={spring.textDX}
                  dy={-8}
                >
                  {yAccessor(bin)}
                </animated.text>
                <animated.rect {...barStyles} />
              </animated.g>
            )
          })}

          {meanLine}
          <AxisBottom
            numTicks={12}
            top={boundedHeight}
            scale={xScale}
            tickLabelProps={() => ({
              fill: '#1c1917',
              fontSize: 11,
              textAnchor: 'middle',
            })}
          />
          {axisBottomLabel}
        </g>
      </svg>
    </div>
  )
}

export { Chart }
