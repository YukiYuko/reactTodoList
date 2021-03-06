// 这个文件就是操作 store 的动作 action集合处理的数据
import * as types from '../actions/actions-type.js';
import data from '../data/db.js'
const initialState = {
    show: false, // 是否显示弹出
    planlist: data // 初始的计划表
};

const planReducer = function(state = initialState, action) {
    let list = state.planlist;
    switch(action.type) {
        // 添加计划
        case types.ADD:
            list.push(action.item);
            // return {...list, ...{planlist: list}};
            return Object.assign({}, state, { planlist: list });
        // 删除计划
        case types.DELECT:
            let newstate = list.filter((item) => item.id !== action.id);
            return Object.assign({}, state, { planlist: newstate });
        // 显示、隐藏弹出层
        case types.SHOW:
            return Object.assign({}, state, { show: action.show });
        default:
            return state
    }
};

export default planReducer;