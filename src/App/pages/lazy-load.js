export default {
    "_default": "html",

    "html": {
        "_default": "drag",

        "drag": () => import('./html/drag/index'),
    },

    "css": {
        "_default": "Gradients",

        "Gradients": () => import('./css/Gradients/index'),
    },

    "javascript": {
        "_default": "Array",

        "Array": () => import('./javascript/Array/index'),
        "String": () => import('./javascript/String/index')
    }
}
