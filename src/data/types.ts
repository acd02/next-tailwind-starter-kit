type WeatherEntry = {
  time: number
  summary: string
  icon: Icon
  sunriseTime: number
  sunsetTime: number
  moonPhase: number
  precipIntensity: number
  precipIntensityMax: number
  precipProbability: number
  temperatureHigh: number
  temperatureHighTime: number
  temperatureLow?: number
  temperatureLowTime?: number
  apparentTemperatureHigh: number
  apparentTemperatureHighTime: number
  apparentTemperatureLow?: number
  apparentTemperatureLowTime?: number
  dewPoint: number
  humidity: number
  pressure: number
  windSpeed: number
  windGust: number
  windGustTime: number
  windBearing: number
  cloudCover: number
  uvIndex: number
  uvIndexTime: number
  visibility: number
  temperatureMin: number
  temperatureMinTime: number
  temperatureMax: number
  temperatureMaxTime: number
  apparentTemperatureMin: number
  apparentTemperatureMinTime: number
  apparentTemperatureMax: number
  apparentTemperatureMaxTime: number
  date: string
  precipIntensityMaxTime?: number
  precipAccumulation?: number
  precipType?: Icon
}

type Icon =
  | 'clear-day'
  | 'cloudy'
  | 'fog'
  | 'partly-cloudy-day'
  | 'partly-cloudy-night'
  | 'rain'
  | 'sleet'
  | 'snow'

type Metric =
  | 'dewPoint'
  | 'humidity'
  | 'pressure'
  | 'temperatureMax'
  | 'temperatureMin'
  | 'uvIndex'
  | 'windSpeed'

export type { WeatherEntry, Icon, Metric }
