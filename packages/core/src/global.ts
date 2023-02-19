const isNodeEnv = () =>
  Object.prototype.toString.call(
    typeof process !== 'undefined' ? process : 0,
  ) === '[object process]'

export const Global = isNodeEnv() ? global : window
