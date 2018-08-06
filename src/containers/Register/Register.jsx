import React, {Component} from 'react';
import axios from 'axios';
import {baseurl} from '../../../common/baseurl';
class Register extends Component {
    constructor () {
        super();
        this.state = {
            username: '',
            pwd: ''
        };
    }
    user (e) {
        this.setState({
            username: e.target.value
        });
    }
    pwd (e) {
        this.setState({
            pwd: e.target.value
        });
    }
    zc () {
        const {username, pwd} = this.state;
        axios({
            method: 'POST',
            url: `${baseurl}/login`,
            data: {'username': username, 'pwd': pwd}
        }).then((res) => {
            console.log(res);
        }).catch((e) => {
            throw Error(e);
        });
    }
    render () {
        const {username, pwd} = this.state;
        return (
            <div>
                <input type="text" placeholder="请输入用户名" value={username} onChange={this.user.bind(this)}/>
                <input type="password" placeholder="请输入密码" value={pwd} onChange={this.pwd.bind(this)}/>
                <button onClick={this.zc.bind(this)}>注册</button>
            </div>
        );
    }
};
export default Register;
