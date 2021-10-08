import { platform } from 'nefbl';
import normalize from "@hai2007/style/normalize.css";

// 引入主模块
/**
 * 除了主模块外，还可以有别的模块
 * 模块有点类似一种功能的一个集合
 */
import appModule from "./app.module";

// 先获取平台实例
platform({

    // 框架管理的区域
    el: document.getElementById('root'),

    // 全局样式
    styles: [normalize]

})

    // 然后启动主模块
    .bootstrap(appModule);
