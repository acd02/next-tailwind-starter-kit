import { ParentSize } from '@visx/responsive'
import { maybe } from 'acd-utils'
import { Chart } from 'charts/index'
import { Select } from 'components/atoms/Select'
import { MainLayout } from 'components/layouts/Main'
import { invertedMetricsMapper, metricsKeys, metricsMapper } from 'data/utils'
import type { NextPageWithLayout } from 'global-next'
import { useState } from 'react'
import { useSpringStatus } from 'stores/springStatus'

function Index() {
  const springsStatus = useSpringStatus(s => s.springsStatus)
  const [activeMetric, setActiveMetric] = useState(metricsKeys[0] ?? 'humidity')

  return (
    <>
      <div className="m-2">
        <label htmlFor="metric" className="text-sm font-semibold text-gray-700">
          Metric
        </label>
        <Select
          disabled={springsStatus === 'idle'}
          onChange={({ target }) =>
            maybe(invertedMetricsMapper[target.value]).map(setActiveMetric)
          }
          id="location"
          name="location"
        >
          {metricsKeys.map(metric => (
            <option key={metric}>{metricsMapper[metric]}</option>
          ))}
        </Select>
      </div>
      <div className="flex min-h-[calc(100%_-_10rem)] items-center">
        <ParentSize className="flex justify-center">
          {({ width, height }) => (
            <Chart metric={activeMetric} width={width} height={height} />
          )}
        </ParentSize>
      </div>
    </>
  )
}

;(Index as NextPageWithLayout<unknown>).getLayout = page => (
  <MainLayout title="app" description="home">
    {page}
  </MainLayout>
)

export default Index
