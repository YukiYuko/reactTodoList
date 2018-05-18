// 这个文件就是操作 store 的动作 action集合处理的数据
import * as types from '../actions/actions-type.js';
const initialState = {
    nav: 'home', // 默认首页
};

const comReducer = function(state = initialState, action) {
    switch(action.type) {
        // 添加计划
        case types.SET_NAV:
            return Object.assign({}, state, { nav: action.data });
        default:
            return state
    }
};

export default comReducer;