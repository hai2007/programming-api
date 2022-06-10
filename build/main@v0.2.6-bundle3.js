window.__nefbl_pack__bundleSrc__[25]=function(){var n,r={};function a(n,r){for(var a=0;a<r.length;a++){var e=r[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}var e,t,l,i=(0,window.__nefbl_pack__getBundle("1").Component)({selector:"html-drag",template:window.__nefbl_pack__getBundle("60").default,styles:[]})((e=function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)},t&&a(e.prototype,t),l&&a(e,l),Object.defineProperty(e,"prototype",{writable:!1}),n=e))||n;return r.default=i,r},window.__nefbl_pack__bundleSrc__[60]=function(){var n={};return n.default='<div class="doc-view">\r\n    <h2>\r\n        HTML 接口 / 拖拽\r\n    </h2>\r\n    <p>\r\n        设置元素属性 draggable=true 即可让元素能够拖放\r\n    </p>\r\n    <h3>\r\n        拖放源\r\n    </h3>\r\n    <p>\r\n        也就是被拖放的元素，其中可以定义如下事件：\r\n    </p>\r\n    <ul>\r\n        <li>\r\n            <span class="important">dragstart</span>\r\n            ：拖放源开始被拖放时触发。\r\n        </li>\r\n        <li>\r\n            <span class="important">drag</span>\r\n            ：拖放源被拖放的过程中触发。\r\n        </li>\r\n        <li>\r\n            <span class="important">dragend</span>\r\n            ：拖放源在拖放结束时触发。\r\n        </li>\r\n    </ul>\r\n    <h3>\r\n        拖放目标\r\n    </h3>\r\n    <p>\r\n        也就是被拖放的元素到达的目标元素，其中可以定义如下事件：\r\n    </p>\r\n    <ul>\r\n        <li>\r\n            <span class="important">dragenter</span>\r\n            ：拖放源进入元素边界时触发。\r\n        </li>\r\n        <li>\r\n            <span class="important">dragleave</span>\r\n            ：拖放源离开元素边界时触发。\r\n        </li>\r\n        <li>\r\n            <span class="important">dragover</span>\r\n            ：拖放源在元素内部时不断被触发。\r\n        </li>\r\n        <li>\r\n            <span class="important">drop</span>\r\n            ：拖放源被释放到元素内部时触发。\r\n        </li>\r\n    </ul>\r\n    <button ui-goto-example=\'drag\'>查看用例>>></button>\r\n</div>\r\n',n};