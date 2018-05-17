import React, { Component } from 'react'
import { Button } from 'antd';
import './home.less'
class Home extends Component {
    // constructor (props) {
    //     super(props)
    // }
    render () {
        return (
            <div className="home">
                <h2>首页</h2>
                <Button type="primary">Primary</Button>
                <p>这是一个 react 学习的基本操作的小栗子</p>
                <p>通过本次学习可以清楚的掌握， react-router、redux的基本使用方法</p>
            </div>
        )
    }
}

export  default Home