import type { ErrorType } from '@web-monitor/core'

export interface CommenError {
  message: string
  errorType: ErrorType
  [key: string]: any
}
