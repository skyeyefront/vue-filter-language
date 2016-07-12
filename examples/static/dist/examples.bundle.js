webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _vue = __webpack_require__(2);

	var _vue2 = _interopRequireDefault(_vue);

	var _highlight = __webpack_require__(4);

	var _highlight2 = _interopRequireDefault(_highlight);

	__webpack_require__(168);

	var _index = __webpack_require__(172);

	var _index2 = _interopRequireDefault(_index);

	var _language = __webpack_require__(174);

	var _language2 = _interopRequireDefault(_language);

	var _index3 = __webpack_require__(175);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 根据开发环境进行对应的操作
	var debug = ("dev") === 'dev'; /**
	                                           * Created by liuxu-s on 10/07/20.
	                                           */


	_vue2.default.use(_index4.default, {
	  debug: debug,
	  id: 'language',
	  languageConfig: _language2.default
	});

	var app = {
	  data: function data() {
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
	    };
	  },

	  ready: function ready() {
	    (0, _jquery2.default)('pre').each(function (i, block) {
	      _highlight2.default.highlightBlock(block);
	    });
	  },
	  template: _index2.default
	};

	var run = function run() {
	  return new _vue2.default({
	    el: 'body',
	    components: {
	      app: app
	    }
	  });
	};
	run();

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(171)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(170)();
	// imports


	// module
	exports.push([module.id, "html, body {\n    margin: 0;\n    padding: 0;\n    font-family: \"Microsoft YaHei\";\n    font-size: 12px;\n}\n\n.container {\n    max-width: 1024px;\n    margin: 0 auto;\n    padding: 8px 24px 8px 24px;\n}\n\nh1 {\n    color: darkcyan;\n}\n\nh2 {\n    color: #40a070;\n}\n\nsection {\n    padding: 8px;\n    /*background-color: #2e2e2e;*/\n    color: #ffffff;\n    margin-bottom: 16px;\n}", ""]);

	// exports


/***/ },

/***/ 170:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 172:
/***/ function(module, exports) {

	module.exports = "<div id=\"demo\" class=\"container\">\n    <h1>Vue语言切换 filter</h1>\n    <section style=\"color: #000000; font-size: 18px; font-weight: bold\">\n        <div style=\"margin-bottom: 20px\">\n            {{ 'switchTest' | language language.active }}\n        </div>\n         <span class=\"language-switch\">\n            <label>{{ 'language.select' | language language.active }}:</label>\n            <select v-model=\"language.active\">\n                <option v-for=\"option in language.list\" v-bind:value=\"option.id\">\n                    {{ option.text | language language.active }}\n                </option>\n            </select>\n        </span>\n    </section>\n</div>";

/***/ },

/***/ 174:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var config = {};
	config.language = {
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
	};
	config.switchTest = {
	  chinese: '语言切换测试',
	  english: 'language switch test'
	};
	exports.default = config;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _log = __webpack_require__(176);

	var _log2 = _interopRequireDefault(_log);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  install: function install(Vue) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? { debug: false, id: '', languageConfig: {} } : arguments[1];

	    var id = options.id || 'language';
	    var languageConfig = options.languageConfig;

	    var language = function language(value, lang) {
	      if (lang === 'chinese') {
	        _log2.default.log('[当前语言为]: ', '中文');
	      } else {
	        _log2.default.log('[Current language is]: ', 'English');
	      }
	      if (!value) {
	        return value;
	      }
	      var keys = value.split('.').filter(function (str) {
	        if (str) return str;
	      });
	      var newValue = languageConfig;
	      for (var i = 0; i < keys.length; i++) {
	        newValue = newValue[keys[i]];
	        if (!newValue) {
	          break;
	        }
	      }
	      return newValue && newValue[lang] || value;
	    };
	    // 安装
	    if (typeof id === 'string' && (typeof languageConfig === 'undefined' ? 'undefined' : _typeof(languageConfig)) === 'object') {
	      if (Vue && Vue.filter instanceof Function) {
	        Vue.filter(id, language);
	      } else {
	        _log2.default.error('过滤器[' + id + ']安装失败, 原因: Vue 异常');
	      }
	    } else {
	      _log2.default.error('过滤器[' + id + ']安装失败, 原因: 过滤器参数类型异常,id为字符串,languageConfig为对象');
	    }
	  }
	};

/***/ },

/***/ 176:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Created by liuxu on 5/7/18.
	 */
	exports.default = {
	  isDebug: false,
	  log: function log() {
	    if (this.isDebug) {
	      var _console;

	      (_console = console).log.apply(_console, arguments);
	    }
	  },
	  info: function info() {
	    if (this.isDebug) {
	      var _console2;

	      (_console2 = console).info.apply(_console2, arguments);
	    }
	  },
	  warn: function warn() {
	    if (this.isDebug) {
	      var _console3;

	      (_console3 = console).warn.apply(_console3, arguments);
	    }
	  },
	  error: function error() {
	    if (this.isDebug) {
	      var _console4;

	      (_console4 = console).error.apply(_console4, arguments);
	    }
	  }
	};

/***/ }

});