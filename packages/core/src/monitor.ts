import type { ReportType, UserConfig } from './types/config'
import { commonConfig } from './config'

export abstract class Monitor {
  public allMethods: Map<
    ReportType,
    (data: Record<string, any>, url: string | URL) => Promise<void>
  >

  constructor() {
    this.allMethods = new Map()
    this.registerReport('beacon', this.reportByBeacon)
    this.registerReport('image', this.reportByImg)
  }

  public setup(config: UserConfig) {
    commonConfig.setConfig(config)
  }

  private getUrl(url?: string | URL) {
    const urlParam = url || commonConfig.config?.baseUrl
    if (!urlParam) {
      throw new Error(
        'The url is not set! Please pass in the config.url parameter or Set the url using the init method',
      )
    }

    return urlParam
  }

  public registerReport(
    name: ReportType,
    handle: (data: Record<string, any>, url: string | URL) => Promise<void>,
  ) {
    if (this.allMethods.get(name))
      console.warn(`${name} is Registered Now replaced`)

    this.allMethods.set(name, handle)
  }

  public report(
    data: Record<string, any>,
    url?: string | URL,
    type: ReportType = 'beacon',
  ) {
    const handle = this.allMethods.get(type)

    if (!handle) throw new Error(`${type} is not reigister`)

    handle(data, this.getUrl(url))
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
