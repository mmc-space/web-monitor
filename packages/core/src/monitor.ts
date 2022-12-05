import type { ReportConfig, UserConfig } from './types/config'

export abstract class Monitor {
  public config: UserConfig

  constructor(config?: UserConfig) {
    this.config = config ?? {}
  }

  private getUrl(url?: string | URL) {
    const urlParam = url || this.config?.baseUrl
    if (!urlParam) {
      throw new Error(
        'The url is not set! Please pass in the config.url parameter or Set the url using the init method',
      )
    }

    return urlParam
  }

  public report(
    data: Record<string, any>,
    url?: string | URL,
    config?: ReportConfig,
  ) {
    const { type = 'beacon' } = config ?? {}

    const all: Record<
      ReportConfig['type'],
      (data: Record<string, any>, url: string | URL) => Promise<void>
    > = {
      beacon: this.reportByBeacon,
      image: this.reportByImg,
    }

    all[type](data, this.getUrl(url))
  }

  abstract reportByImg(
    data: Record<string, any>,
    url: string | URL
  ): Promise<void>

  abstract reportByBeacon(
    data: Record<string, any>,
    url: string | URL
  ): Promise<void>
}
