import type { UserConfig } from './types/config'

class Config {
  public config?: UserConfig

  public setConfig(config?: UserConfig) {
    this.config = config
  }
}

export const commonConfig = new Config()
