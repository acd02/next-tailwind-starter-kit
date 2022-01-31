import { Bin, max } from 'd3-array'
import type { ScaleLinear } from 'd3-scale'
import type { WeatherEntry } from 'data/types'

import type { Dimensions } from './types'

function getDimensions({ width, height }: { width: number; height: number }): Dimensions {
  const margin = {
    top: 30,
    right: 20,
    bottom: 60,
    left: 50,
  }

  return {
    margin,
    boundedWidth: width - margin.left - margin.right,
    boundedHeight: height - margin.top - margin.bottom,
  }
}

const yAccessor = (d: WeatherEntry[]) => d.length

type GetBinStyles = {
  bin: Bin<WeatherEntry, number>
  xScale: ScaleLinear<number, number, never>
  yScale: ScaleLinear<number, number, never>
  boundedHeight: number
  paddingBetweenBars?: number
}

function getBinStyles({
  bin,
  xScale,
  yScale,
  boundedHeight,
  paddingBetweenBars = 1,
}: GetBinStyles) {
  const { x0 = 0, x1 = 0 } = bin
  const x = xScale(x0) // + padding / 2
  const y = yScale(yAccessor(bin))

  // to avoid 👉 Error: <rect> attribute width: A negative value is not valid.
  const width = max([0, xScale(x1) - xScale(x0) - paddingBetweenBars]) as number
  // to avoid 👉 Error: <rect> attribute height: A negative value is not valid.
  const height = max([0, boundedHeight - y]) as number

  return { x, y, width, height }
}

export { getDimensions, yAccessor, getBinStyles }
