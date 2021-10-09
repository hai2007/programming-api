import { Component, reactive } from 'nefbl'
import urlFormat from '../tool/urlFormat'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    selected: any

    $setup() {
        return {
            selected: reactive([]),
            changeSelected(event) {
                let target = event.target

                this.selected[target.getAttribute('key')] = target.getAttribute('val')
            }
        }
    }

    $mounted() {

        // 地址栏信息
        let selected = urlFormat(window.location.href)

        // 默认路由
        let defaultRouter = ["html"]

        // 判断，如果没有，就用默认路由
        for (let i = 0; i < defaultRouter.length; i++) {
            this.selected[i] = selected.router[i] ? selected.router[i] : defaultRouter[i]
        }

    }

}
