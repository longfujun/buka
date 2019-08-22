import { createStore, combineReducers, compose } from 'redux'
// 引入各个reducer模块
import user from './modules/user'
import menu from './modules/menu'
import home from './modules/home'
import mine from './modules/mine'

// 合并多个reducer
const reducer = combineReducers({
    user,
    menu,
    home,
    mine
});

// 使用redux开发者工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 输出store
export default createStore(reducer, composeEnhancers());

