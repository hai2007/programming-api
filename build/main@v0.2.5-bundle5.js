window.__nefbl_pack__bundleSrc__[27]=function(){var n,s={};var e=(0,window.__nefbl_pack__getBundle("1").Component)({selector:"css-scss",template:window.__nefbl_pack__getBundle("58").default,styles:[]})(n=function n(){!function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,n)})||n;return s.default=e,s},window.__nefbl_pack__bundleSrc__[58]=function(){var n={};return n.default="<div class=\"doc-view\">\n    <h2>\n        扩展 / Sassy CSS\n    </h2>\n    <p>\n        sass分为两类，其中一种是SCSS（Sassy CSS），是一个 CSS3 语法的扩充版本，本笔记就是选择这种。\n    </p>\n    <h3>\n        Ruby版本的安装和使用\n    </h3>\n    <p>\n        安装好ruby以后，直接在命令行运行下面的命令进行安装：\n    </p>\n    <pre ui-code>gem install sass</pre>\n    <p>\n        安装完毕之后，就可以直接运行下面的命令开始使用：\n    </p>\n    <pre ui-code>sass [--style param] sourceFile.scss targetFile.css</pre>\n    <p>\n        表示编译sass文件为css文件（其中param可选参数有：nested：嵌套缩进的css代码，它是默认值；expanded：没有缩进的、扩展的css代码；compact：简洁格式的css代码；compressed：压缩后的css代码）。\n    </p>\n    <p>\n        例如：\n    </p>\n    <pre ui-code>sass --style compressed test.scss test.css</pre>\n    <p>\n        如果你希望修改scss代码的时候可以自动编译：\n    </p>\n    <pre ui-code>sass --style compressed --watch test.scss:test.css</pre>\n    <h3>\n        常用语法\n    </h3>\n\n    <h4>\n        变量\n    </h4>\n    <p>\n        以$开头即可定义变量：\n    </p>\n    <pre ui-code='css'>\n    $btn_bgcolor:#222222;\n\n    input.btn{\n        background-color:$btn_bgcolor;\n    }\n    </pre>\n    <p>\n        如果变量是用在字符串中，你需要用#{}包裹一下：\n    </p>\n    <pre ui-code='css'>\n    $direction:top;\n\n    input.btn{\n        margin-#{$direction}:10px;\n    }\n    </pre>\n    <h4>\n        计算\n    </h4>\n    <pre ui-code='css'>\n    div{\n        padding:(14px / 2);\n        right: $var * 10%;\n    }\n    </pre>\n    <h4>\n        嵌套\n    </h4>\n    <p>\n        类型一：\n    </p>\n    <pre ui-code='css'>\n    //源代码\n    div{\n        .btn{\n            //Todo\n        }\n    }\n    //编译后\n    div .btn{\n        //Todo\n    }\n    </pre>\n    <p>\n        类型二：\n    </p>\n    <pre ui-code='css'>\n    //源代码\n    div{\n        &.btn{\n            //Todo\n        }\n    }\n    //编译后\n    div.btn{\n        //Todo\n    }\n    </pre>\n    <h4>\n        注释\n    </h4>\n    <p>\n        一共支持三种注释：\n    </p>\n    <ul>\n        <li>\n            <span class=\"important\">\n                /* annotation */\n            </span>\n            多行注释，会保留到编译后；\n        </li>\n        <li>\n            <span class=\"important\">\n                // annotation\n            </span>\n            单行注释，且只出现在源文件；\n        </li>\n        <li>\n            <span class=\"important\">\n                /*! annotation */\n            </span>\n            多行注释，即使是压缩了也会保留。\n        </li>\n    </ul>\n    <h4>\n        继承\n    </h4>\n    <p>\n        现在有了一个公共的按钮样式：\n    </p>\n    <pre ui-code>\n    .btn{\n        //按钮的公共样式\n    }\n    </pre>\n    <p>\n        你现在要写一个提交按钮，为了在基础按钮基础上开发，你可以写这样的代码：\n    </p>\n    <pre ui-code='css'>\n    .btn-submit{\n        @extend .btn;\n        //你对提交按钮的特殊样式\n    }\n    </pre>\n    <h4>\n        插入文件\n    </h4>\n    <p>\n        编译一般编译主文件，别的文件由主文件引入，比如现在有主文件root.scss，还有一个重置文件_reset.scss（开头的下划线表示这是一个局部文件，并不需要生成对应的独立css文件），你只需要在主文件中添加一行：\n    </p>\n    <pre ui-code='css'>@import \"./src/reset\";</pre>\n    <h4>\n        Mixin\n    </h4>\n    <p>\n        说的简单点就是代码模板预定义：\n    </p>\n    <pre ui-code='css'>\n    @mixin bgQuick($url,$bgcolor:red){\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: auto auto;\n        background-image:url($url);\n        background-color:$bgcolor;\n    }\n    </pre>\n    <p>\n        使用的时候，出入参数（有缺省值的可以传入也可以不传入）：\n    </p>\n    <pre ui-code>\n    div{\n        @include bgQuick('image/smile.png');\n    }\n    </pre>\n    <h4>\n        函数\n    </h4>\n    <pre ui-code='css'>\n    @function double($size) {\n        @return $size * 2;\n    }\n\n    #sidebar {\n       width: double(5px);\n    }\n    </pre>\n    <h4>\n        if\n    </h4>\n    <p>\n        sass的@if用not,or,and分别表示非，或，与。\n    </p>\n    <pre ui-code='css'>\n    $flag:1;\n    div{\n        @if $flag == 1 {\n            //Todo\n        } @else if($flag > 1 and $flag < 10){\n            //Todo\n        } @else {\n            //Todo\n        }\n    }\n    </pre>\n    <h4>\n        for\n    </h4>\n    <pre ui-code='css'>\n    @for $i from 0 to $home_nav_num {\n        .nav li:nth-child(#{$i + 1}) {\n            background-position-y: (0 - $i)*70px - 20px;\n        }\n    }\n    </pre>\n    <h4>\n        whild\n    </h4>\n    <pre ui-code='css'>\n    $i:0;\n    @while $i <  $home_nav_num {\n        .nav li:nth-child(#{$i + 1}) {\n            background-position-y: (0 - $i)*70px - 20px;\n        }\n    }\n    </pre>\n    <h4>\n        each\n    </h4>\n    <pre ui-code='css'>\n    @each $i in 1, 2, 3 {\n        .nav li:nth-child(#{$i + 1}) {\n            background-position-y: (0 - $i)*70px - 20px;\n        }\n    }\n    </pre>\n</div>\n",n};