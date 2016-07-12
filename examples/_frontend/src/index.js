/**
 * Created by liuxu-s on 10/07/20.
 */
import $ from 'jquery'
import Vue from 'vue'
import hljs from 'highlight.js'

import './index.css'
import template from './index.html'
import languageConfig from './language.js'
import VueFilterLanguage from '../../../src/index.js'

// 根据开发环境进行对应的操作
let debug = process.skyeye.ENV === 'dev'

Vue.use(
  VueFilterLanguage, {
    debug,
    id: 'language',
    languageConfig
  }
)

let app = {
  data () {
    return {
      language: {
        active: 'chinese',
        list: [{
          id: 'chinese',
          text: 'language.chinese'
        }, {
          id: 'english',
          text: 'language.english'
        }]
      }
    }
  },
  ready: function () {
    $('pre').each(function (i, block) {
      hljs.highlightBlock(block)
    })
  },
  template
}

let run = function () {
  return new Vue({
    el: 'body',
    components: {
      app
    }
  })
}
run()
