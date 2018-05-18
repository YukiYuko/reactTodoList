// 这个模块是合并 所有的 reducer ，因为createStore 只接受一个 reducer
import { combineReducers } from 'redux';

// Reducers
import planlist from './planlist';
import com from './com';

// Combine Reducers
const reducers = combineReducers({
    planlist,
    com
});

export default reducers;