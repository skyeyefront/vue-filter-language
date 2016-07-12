# 自定义语言切换过滤器: language（默认过滤器名称）

### 安装
	如下‘FILE_PATH’代表vue-transition-animate的文件路径
	// 全局
	<script src="FILE_PATH"></script>
	Vue.use(VueDirectiveCheck, options)
	
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

### 在模板中使用
	  例：
	  {{ 'filter' | language global.language.active }}
	  filter代表在languageConfig中传入的项目的文字切换配置项，
	  language代表过滤器名称（可以使用自定义的名称），
	  global.language.active代表语言类型配置项
	  （目前为chinese和english切换，也可以使用Vuex中的store进行存储和切换）

### 安装选项
	options = {
		debug: true | false, // 为true时包含调试输出
		id: string, //类型为字符串，代表过滤器的名称，默认为language
		/*	
			必填
			项目中需要中英文切换的文字配置项，
			可单独放于一个配置文件中，
			然后通过import引入
		*/
		languageConfig: {
     		language: {
     			  select: {
    		          chinese: '语言选择',
    			      english: 'Language'
    			  },
    			  chinese: {
    				  chinese: '中文',
    				  english: 'Chinese'
    			  },
    			  english: {
                  	  chinese: '英文',
    				  english: 'English'
    			  }
     		},
     		filter: {
     	        chinese: '语言切换测试',
     	        english: 'language switch test'
     		}
    	}
	}
	
### 注意
	1. example中的语言配置放在了global.js文件中
	export default {
	    // 语言
	    language: {
            active: 'chinese',
        }
    }
    若使用Vuex来实现Flux数据流管理，则可以将language语言类型变量放在全局store中。
    然后用特定事件触发language.active的修改即可。
    
    2. languageConfig参数为特定项目中需要进行中英文切换的文字配置项，
    建议放在一个language.js中进行单独保存，然后通过inport引入即可。
    
### 示例运行
	运行环境：python2.7, Flask, npm
	进入examples目录执行python demorun.py
	执行npm run dev启动调试模式；执行npm run pro进行打包
	