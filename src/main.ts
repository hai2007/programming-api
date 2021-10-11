import { platform } from 'nefbl'
import normalize from "@hai2007/style/normalize.css"
import docView from "@hai2007/style/doc-view.css"
import docView_reDesign from './style/doc-view.scss'

// 兼容文件
import '@hai2007/polyfill/Promise.js'

// 主模块
import appModule from "./app.module"

// 先获取平台实例
platform({

    // 框架管理的区域
    el: document.getElementById('root'),

    // 全局样式
    styles: [normalize, docView, docView_reDesign]

})

    // 然后启动主模块
    .bootstrap(appModule)
