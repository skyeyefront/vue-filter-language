import log from './log'

export default {
  install: function (Vue, options = { debug: false, id: '', languageConfig: {} }) {
    let id = options.id || 'language'
    let languageConfig = options.languageConfig

    let language = function (value, lang) {
      if (lang === 'chinese') {
        log.log('[当前语言为]: ', '中文')
      } else {
        log.log('[Current language is]: ', 'English')
      }
      if (!value) {
        return value
      }
      let keys = value.split('.').filter(function (str) {
        if (str) return str
      })
      let newValue = languageConfig
      for (let i = 0; i < keys.length; i++) {
        newValue = newValue[keys[i]]
        if (!newValue) {
          break
        }
      }
      return newValue && newValue[lang] || value
    }
    // 安装
    if (typeof (id) === 'string' && typeof (languageConfig) === 'object') {
      if (Vue && Vue.filter instanceof Function) {
        Vue.filter(id, language)
      } else {
        log.error('过滤器[' + id + ']安装失败, 原因: Vue 异常')
      }
    } else {
      log.error('过滤器[' + id + ']安装失败, 原因: 过滤器参数类型异常,id为字符串,languageConfig为对象')
    }
  }
}
