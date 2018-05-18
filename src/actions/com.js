import * as types from './actions-type.js';
// 设置导航菜单
export function set_nav(data) {
    return {
        type: types.SET_NAV,
        data
    };
}