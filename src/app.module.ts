import { Module } from 'nefbl';

// 组件
import AppComponent from './App/index';

@Module({
    declarations: [
        AppComponent
    ],
    imports: [],
    exports: [],
    bootstrap: AppComponent
})
export default class {

};
