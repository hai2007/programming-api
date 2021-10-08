import { Module } from 'nefbl'

// 首页
import AppComponent from './App/index'

// 组件
import search from './component/search/index'

// 指令
import uiBind from './directive/ui-bind'
import uiModel from './directive/ui-model'
import uiOn from './directive/ui-on'

@Module({
    declarations: [
        AppComponent,
        search,
        uiBind, uiModel, uiOn
    ],
    bootstrap: AppComponent
})
export default class {

}
