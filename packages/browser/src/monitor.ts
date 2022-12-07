import { Monitor } from '@mmc-cloud/web-monitor-core'
import { logger } from '@mmc-cloud/web-lib'

export class BrowserMonitor extends Monitor {
  public async reportByBeacon(data: Record<string, any>, url: string | URL) {
    if (!window.navigator) {
      logger.error('The navigator API is not supported')
      return
    }

    const formData = new FormData()
    for (const key in data)
      formData.append(key, data[key])

    navigator.sendBeacon(url, formData)
  }

  public async reportByImg(data: Record<string, any>, url: string | URL) {
    const params = new URLSearchParams(data)
    new Image().src = `${url}?data=${JSON.stringify(params)}`
  }
}

export const browserMonitor = new BrowserMonitor()
