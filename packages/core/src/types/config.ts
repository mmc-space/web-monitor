// Types of errors collected
export enum ErrorType {
  runtime = 'runtime',
  script = 'script',
  resources = 'resources',
}

export interface UserConfig {
  appKey?: string

  baseUrl?: string

  errors?: Array<keyof typeof ErrorType>

  performance?: boolean

  onlineTime?: boolean
}

export type ReportType = 'image' | 'beacon' & string
