// Types of errors collected
export type ErrorType = 'runtime' | 'script' | 'resources'

export interface UserConfig {
  appKey?: string

  baseUrl?: string

  errors?: ErrorType[]

  performance?: boolean

  onlineTime?: boolean
}

type ReportType = 'image' | 'beacon'

export interface ReportConfig {
  type: ReportType
}
