import React, { Component } from 'react'
import {
    Router,
    Route
} from 'react-router-dom'
// 引入 store
import { Provider } from 'react-redux';
import store from './redux/store.js'
import PublicHeader from './components/public/header'
import Plan from './components/plan/plan.js'
import Home from './components/home/home.js'
import Popup from './components/pupop/pupop.js'
import TestRouter from './components/testrouter/testrouter.js'
import Detail from './components/detail/detail.js'
import './App.css'
import './styles/reset.css'
import './styles/comment.css'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()
class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            // store的挂载
            <Provider store={store}>
                <Router history = {history}>
                    <div className="App">
                        <PublicHeader/>
                        <div className="router-view">
                            <div className="contentBox">
                                <div className="content">
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/plan" component={Plan}/>
                                    <Route path="/test" component={TestRouter}/>
                                    <Route path="/detail/:id" component={Detail}/>
                                </div>
                            </div>
                        </div>
                        <Popup/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App
