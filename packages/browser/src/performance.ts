import { CommenReport } from '@web-monitor/core/'
import type { Performance } from './types/performance'

class PerformanceReport extends CommenReport {
  public generateReport() {
    if (!window.performance)
      throw new Error('Current browser does not support performance API')

    const [entry] = window.performance.getEntries()
    const {
      // dns
      domainLookupEnd,
      domainLookupStart,

      // tcp
      connectEnd,
      connectStart,

      // request & response
      requestStart,
      responseStart,
      responseEnd,

      // processing
      domComplete,
      domInteractive,

      // load
      loadEventEnd,
      loadEventStart,
    } = entry as PerformanceNavigationTiming

    const performance: Performance = {
      dns: domainLookupEnd - domainLookupStart,
      tcp: connectEnd - connectStart,
      request: responseStart - requestStart,
      response: responseEnd - responseStart,
      processing: domComplete - domInteractive,
      load: loadEventEnd - loadEventStart,
    }

    return performance
  }
}

export const performanceReport = new PerformanceReport()
