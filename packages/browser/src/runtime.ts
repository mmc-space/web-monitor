import { CommenReport, ErrorType, Global } from '@mmc-cloud/web-monitor-core'

import type { ResourceLoadErrorTarget } from './types/event'
import type { CommenError } from './types/runtime'

class RuntimeReport extends CommenReport {
  constructor() {
    super()
    Global.addEventListener('error', (event: ErrorEvent) => {
      const target = event.target as ResourceLoadErrorTarget
      const { tagName } = target

      const message = tagName ? this.handleResourceError(target) : this.handleRuntimeError(event)
      this.generateReport(message)
    })
  }

  public generateReport(message: CommenError) {
    const payload = {
      ...message,
      timestamp: Date.now(),
    }

    return payload
  }

  private handleResourceError(target: ResourceLoadErrorTarget): CommenError {
    const { tagName, src, href } = target

    const message = {
      IMG: `IMG resource loading failed: ${src}`,
      SCRIPT: `javascript resource loading failed: ${src}`,
      LINK: `css resource loading failed: ${href}`,
    }[tagName!] ?? 'resource loading failed'

    return {
      message,
      errorType: ErrorType.resources,
    }
  }

  private handleRuntimeError(event: ErrorEvent): CommenError {
    const { message, filename, lineno, colno, error } = event

    return {
      message: `${message} at ${filename}, ${lineno} row, ${colno} colno`,
      errorType: ErrorType.runtime,
      stack: error.stack,
    }
  }
}

export const runtimeReport = new RuntimeReport()
