import { Component, reactive, ref } from 'nefbl'
import urlFormat from '../tool/urlFormat'
import { isFunction } from '@hai2007/tool/type'

import pages from './pages/lazy-load'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    selected: any
    currentPage: any
    loadPage: Function

    $setup() {
        return {
            selected: reactive([]),
            currentPage: ref(null),
            changeSelected(event) {
                let target = event.target
                let deep = +target.getAttribute('key')

                this.selected[deep] = target.getAttribute('val')

                let url = "#"
                for (let index = 0; index <= deep; index++) {
                    url += "/" + this.selected[index]
                }

                window.location.href = url

                this.loadPage()

            },
            loadPage() {

                let currentPageFunction = pages
                let currentPageDeep = 0
                while (!isFunction(currentPageFunction)) {

                    // 求解出当前层次的页面
                    let pagename = this.selected[currentPageDeep] in currentPageFunction ? this.selected[currentPageDeep] : currentPageFunction._default
                    this.selected[currentPageDeep] = pagename

                    currentPageFunction = currentPageFunction[pagename]

                    currentPageDeep += 1
                }

                currentPageFunction().then(data => {
                    this.currentPage = data.default
                })


            }
        }
    }

    $mounted() {

        // 地址栏信息
        let selected = urlFormat(window.location.href)

        for (let i = 0; i < selected.router.length; i++) {
            this.selected[i] = selected.router[i]
        }

        this.loadPage()

    }

}
