(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{36:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),r=t(0),i=t(48),a=t(49),s=function(){function e(){}return e=(0,o.__decorate)([(0,r.Component)({selector:"css-gradients",template:a.default,styles:[i.default]})],e)}();n.default=s},48:function(e,n,t){"use strict";t.r(n),n.default=""},49:function(e,n,t){"use strict";t.r(n),n.default="<h2>\n    CSS 属性&值 / 渐变色\n</h2>\n<h3>\n    线性渐变\n</h3>\n<p>\n    你可以定义一个方向和至少两个颜色来定义渐变：\n</p>\n<pre ui-code='css'>background-image: linear-gradient(direction, color-stop1, color-stop2, ...);</pre>\n<p>\n    方向（direction）可以是to bottom、to top、to right、to left、to bottom right等，默认to bottom。\n</p>\n<p>\n    同时，你还可以定义一个角度（用于代替方向）：\n</p>\n<pre ui-code='css'>background-image: linear-gradient(angle, color-stop1, color-stop2);</pre>\n<img src=\"./image/css3-gradients-deg.jpg\" width='300' />\n<p>\n    角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。\n</p>\n<p class=\"warn\">\n    但是，请注意很多浏览器（Chrome、Safari、firefox等）的使用了旧的标准，即 0deg 将创建一个从左到右的渐变，90deg 将创建一个从下到上的渐变。换算公式 90 - x = y 其中 x\n    为标准角度，y为非标准角度。\n</p>\n<button ui-goto-example='linear-gradient'>查看用例>>></button>\n<h3>\n    径向渐变\n</h3>\n<pre ui-code='css'>background-image: radial-gradient(shape size at position, start-color, ..., last-color);</pre>\n<p>\n    shape 参数定义了形状。它可以是值 circle 或 ellipse。其中，circle 表示圆形，ellipse 表示椭圆形。默认值是 ellipse。\n</p>\n<button ui-goto-example='radial-gradient'>查看用例>>></button>\n"}}]);