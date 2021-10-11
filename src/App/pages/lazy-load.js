export default {
    "_default": "javascript",

    "html": {

    },

    "css": {

    },

    "javascript": {
        "_default": "Array",

        "Array": () => import('./javascript/Array/index'),
        "String": () => import('./javascript/String/index')
    }
}
