/**
 * Created by liuxu on 5/7/18.
 */
export default {
  isDebug: false,
  log: function (...args) {
    if (this.isDebug) {
      console.log(...args)
    }
  },
  info: function (...args) {
    if (this.isDebug) {
      console.info(...args)
    }
  },
  warn: function (...args) {
    if (this.isDebug) {
      console.warn(...args)
    }
  },
  error: function (...args) {
    if (this.isDebug) {
      console.error(...args)
    }
  }
}
