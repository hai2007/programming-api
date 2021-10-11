import { Module } from 'nefbl'

// 首页
import AppComponent from './App/index'

// 组件
import search from './component/search/index'

// 指令
import uiBind from './directive/ui-bind'
import uiModel from './directive/ui-model'
import uiOn from './directive/ui-on'
import uiLazy from './directive/ui-lazy'
import uiCode from './directive/ui-code'

@Module({
    declarations: [
        AppComponent,
        search,
        uiBind, uiModel, uiOn, uiLazy, uiCode
    ],
    bootstrap: AppComponent
})
export default class {

}
