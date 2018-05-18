import React, { Component } from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import store from '../../redux/store.js';
import './header.less'
import { connect } from 'react-redux';
import {set_nav} from "../../actions/com";
class PublicHeader extends Component {
    constructor (props) {
        super(props);
        this.state = {
            current: 'home'
        };
    }
    handleClick = (e) => {
        store.dispatch(set_nav(e.key));
        console.log(this.props)
    };
    componentDidMount () {
        console.log('header---props', this.props)
    }
    render () {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.props.nav]}
                mode="horizontal"
            >
                <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
                <Menu.Item key="plan"><Link to="/plan">计划表</Link></Menu.Item>
                <Menu.Item key="test"><Link to="/test">二级路由</Link></Menu.Item>
            </Menu>
        )
    }
}

const mapStateToProps = function(store) {
    return store.com
};
// 连接 store，作为 props
export default connect(mapStateToProps)(PublicHeader);