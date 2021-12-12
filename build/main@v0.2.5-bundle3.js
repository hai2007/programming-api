window.__nefbl_pack__bundleSrc__[25]=function(){var n,a={};var l=(0,window.__nefbl_pack__getBundle("1").Component)({selector:"html-drag",template:window.__nefbl_pack__getBundle("56").default,styles:[]})(n=function n(){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,n)})||n;return a.default=l,a},window.__nefbl_pack__bundleSrc__[56]=function(){var n={};return n.default='<div class="doc-view">\n    <h2>\n        HTML 接口 / 拖拽\n    </h2>\n    <p>\n        设置元素属性 draggable=true 即可让元素能够拖放\n    </p>\n    <h3>\n        拖放源\n    </h3>\n    <p>\n        也就是被拖放的元素，其中可以定义如下事件：\n    </p>\n    <ul>\n        <li>\n            <span class="important">dragstart</span>\n            ：拖放源开始被拖放时触发。\n        </li>\n        <li>\n            <span class="important">drag</span>\n            ：拖放源被拖放的过程中触发。\n        </li>\n        <li>\n            <span class="important">dragend</span>\n            ：拖放源在拖放结束时触发。\n        </li>\n    </ul>\n    <h3>\n        拖放目标\n    </h3>\n    <p>\n        也就是被拖放的元素到达的目标元素，其中可以定义如下事件：\n    </p>\n    <ul>\n        <li>\n            <span class="important">dragenter</span>\n            ：拖放源进入元素边界时触发。\n        </li>\n        <li>\n            <span class="important">dragleave</span>\n            ：拖放源离开元素边界时触发。\n        </li>\n        <li>\n            <span class="important">dragover</span>\n            ：拖放源在元素内部时不断被触发。\n        </li>\n        <li>\n            <span class="important">drop</span>\n            ：拖放源被释放到元素内部时触发。\n        </li>\n    </ul>\n    <button ui-goto-example=\'drag\'>查看用例>>></button>\n</div>\n',n};