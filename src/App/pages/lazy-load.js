export default {
    "_default": "html",

    "html": {
        "_default": "meta",

        "meta": () => import('./html/meta/index'),
        "storage": () => import('./html/storage/index'),
        "web-workers": () => import('./html/web-workers/index')
    },

    "css": {
        "_default": "background-clip",

        "background-clip": () => import('./css/background-clip/index'),
        "box-shadow": () => import('./css/box-shadow/index'),
        "selector": () => import('./css/selector/index')
    },

    "javascript": {
        "_default": "Array",

        "Array": () => import('./javascript/Array/index'),
        "String": () => import('./javascript/String/index')
    }
}
