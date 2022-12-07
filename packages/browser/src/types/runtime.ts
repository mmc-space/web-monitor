import type { ErrorType } from '@mmc-cloud/web-monitor-core'

export interface CommenError {
  message: string
  errorType: ErrorType
  [key: string]: any
}
