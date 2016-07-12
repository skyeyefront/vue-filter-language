# 自定义语言切换过滤器: language（默认过滤器名称）

### 安装
	如下‘FILE_PATH’代表vue-filter-language的文件路径
	// 全局
	<script src="FILE_PATH"></script>
	Vue.use(VueFilterLanguage, options)
	
	// AMD		
	define([FILE_PATH], function(VueFilterLanguage){
		Vue.use(VueFilterLanguage, options)
	})
	require([FILE_PATH], function(VueFilterLanguage){
		Vue.use(VueFilterLanguage, options)
	})
	
	// CommonJS
	var VueFilterLanguage = require(FILE_PATH)
	Vue.use(VueFilterLanguage, options)
	
	// ES6（推荐）
	import VueFilterLanguage from FILE_PATH
	Vue.use(VueFilterLanguage, options)

### 安装选项
	options = {
		debug: true | false, // 为true时包含调试输出
		id: string, //类型为字符串，代表过滤器的名称，默认为language
		/*	
			必填
			项目中需要中英文切换的文字配置项
		*/
		languageConfig: {}
	}
### 实例
	  1. 模板中
	  <span class="language-switch">
          <label>{{ 'language.select' | language language.active }}:</label>
          <select v-model="language.active">
              <option v-for="option in language.list" v-bind:value="option.id">
                  {{ option.text | language language.active }}
              </option>
          </select>
      </span>
      
	  2. JS中
	  Vue.use(VueFilterLanguage, {
        debug,
        id: 'language',
        languageConfig
      })
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
    
### 注意
	languageConfig参数为特定项目中需要进行中英文切换的文字配置项，
    建议放在一个language.js中进行单独保存，然后通过inport引入即可。
    
### 示例运行
	运行环境：python2.7, Flask, npm
	进入examples目录执行python demorun.py
	执行npm run dev启动调试模式；执行npm run pro进行打包
	