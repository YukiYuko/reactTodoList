import React, { Component } from 'react'
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import { Modal, Button, notification } from 'antd'
// 引入 定义的 action
import {deletePlan, addPlan} from '../../actions/plan.js';

const confirm = Modal.confirm;

class Plan extends Component {
    state = {
        loading: false,
        visible: false,
        d: '',
        title: '来添加一个任务吧',
        content: '这是任务的内容哦'
    };
    // 显示弹出
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    // 确认添加
    handleOk = () => {
        if (!this.state.title || !this.state.content) {
            notification['error']({
                message: '提示',
                description: '标题和内容必须填写',
            });
            return false
        }
        this.setState({ loading: true });
        setTimeout(() => {
            store.dispatch(addPlan(this.state));
            this.reset();
        }, 3000);
    };
    // 取消
    handleCancel = () => {
        this.reset();
    };
    reset = () => {
        this.setState({
            id: '',
            title: '',
            content: '',
            visible: false,
            loading: false
        });
    };
    // 输入框事件
    handleChage = (str, e) => {
        this.setState({
            id: Math.ceil(Math.random()*10000),
            [str]: e.target.value
        })
    };
    // 删除计划
    delete = (id) => {
        confirm({
            title: '您真的要删除该计划吗?',
            content: '删除之后无法找回，请慎重',
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                store.dispatch(deletePlan(id));
            },
            onCancel() {
                console.log('取消');
            },
        });
    };
    // js 跳转路由
    detail = (id) => {
        this.props.history.push(`/detail/${id}`)
    };
    render () {
        const { visible, loading } = this.state;
        return (
            <div>
                <div className="plant">
                    <h3>
                        计划表
                        <Button type="primary" onClick={this.showModal}>添加计划</Button>
                    </h3>
                </div>
                <div className="planlist">
                    <table>
                        <thead>
                        <tr>
                            <th>标题</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.planlist.planlist.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="plan-title" onClick={this.detail.bind(this, item.id)}>{item.title}</td>
                                        <td className="plan-delect" onClick={this.delete.bind(this, item.id)}>删除</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
                <Modal
                    visible={visible}
                    title="添加计划"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            确定
                        </Button>,
                    ]}
                >
                    <div className="pbox">
                        <div>
                            <h4>计划标题</h4>
                            <input onChange={this.handleChage.bind(this, 'title')} value={this.state.title} placeholder="请输入计划标题"/>
                        </div>
                        <div>
                            <h4>计划内容</h4>
                            <textarea onChange={this.handleChage.bind(this, 'content')}
                                      value={this.state.content} placeholder="请输入计划内容" rows="3"/>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        planlist: store.planlist
    };
};
// 连接 store，作为 props
export default connect(mapStateToProps)(Plan);
