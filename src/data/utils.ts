import { objectKeys } from 'utils/object'

import type { Metric } from './types'

const metricsMapper: Record<Metric, string> = {
  dewPoint: 'Dew point',
  humidity: 'Humidity',
  pressure: 'Pressure',
  temperatureMax: 'Temperature Max',
  temperatureMin: 'Temperature Min',
  uvIndex: 'UV Index',
  windSpeed: 'Wind Speed',
}

const metricsKeys = objectKeys(metricsMapper)

const invertedMetricsMapper = metricsKeys.reduce<Record<string, Metric>>(
  (acc, metric) => {
    /* eslint-disable fp/no-mutation */
    acc[metricsMapper[metric]] = metric

    return acc
  },
  {} as Record<string, Metric>
)

export { metricsMapper, metricsKeys, invertedMetricsMapper }
