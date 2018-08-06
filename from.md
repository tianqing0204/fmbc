import React, {Component} from 'react';
class Login extends Component {
    constructor () {
        super();
        this.state = {
            value: '',
            text: ''
        };
    }
    texts (e) {
        this.setState({
            text: e.target.value
        });
    }
    change (e) {
        // const arr = e.target.options;
        // const num = Object.keys(arr);
        // console.log(arr);
        this.setState({
            value: e.target.value
        });
    }
    render () {
        const {value, text} = this.state;
        console.log(text);
        return (
            <div className="Login">
                <select value={value} onChange={this.change.bind(this)}>
                    <option value="石家庄">石家庄</option>
                    <option value="河北">河北</option>
                    <option value="邯郸">邯郸</option>
                </select>
                <input type="text" value={text} onChange={this.texts.bind(this)}/>
            </div>
        );
    }
};
export default Login;
##这是下拉列表和input


import React, {Component} from 'react';
class Login extends Component {
    constructor () {
        super();
        this.state = {
            value: '再也没有'
        };
    }
    change (e) {
        this.setState({
            value: e.target.value
        });
    }
    render () {
        const {value} = this.state;
        return (
            <div className="Login">
                <input type="radio" checked={value === '再也没有'} value="再也没有" onChange={this.change.bind(this)}/>
                <input type="radio" checked={value === '像我这样的人'} value="像我这样的人" onChange={this.change.bind(this)}/>
                <input type="radio" checked={value === '消愁'} value="消愁" onChange={this.change.bind(this)}/>
            </div>
        );
    }
};
export default Login;
##单选
import React, {Component} from 'react';
class Login extends Component {
    constructor () {
        super();
        this.state = {
            val: []
        };
    }
    change (e) {
        const {checked, value} = e.target;
        let {val} = this.state;
        if (checked && val.indexOf(value) === -1) {
            val.push(value);
        } else {
            val = val.filter(i => i !== value);
        }
        this.setState({
            val: val
        }, () => {
            console.log(val);
        });
    }
    render () {
        const {val} = this.state;
        return (
            <div className="Login">
                <input type="checkbox" checked={val.indexOf('再也没有') !== -1} value="再也没有" onChange={this.change.bind(this)}/>
                <input type="checkbox" checked={val.indexOf('像我这样的人') !== -1 } value="像我这样的人" onChange={this.change.bind(this)}/>
                <input type="checkbox" checked={val.indexOf('消愁') !== -1} value="消愁" onChange={this.change.bind(this)}/>
            </div>
        );
    }
};
export default Login;
##多选

import React, {Component} from 'react';
class Login extends Component {
    constructor () {
        super();
        this.state = {
            value: ['消愁', '谁']
        };
    }
    change (e) {

        const {options} = e.target;
        const arr = Object.keys(options).filter(i => options[i].selected).map(i => options[i].value);
        this.setState({
            value: arr
        });
    }
    render () {
        const {value} = this.state;
        return (
            <div className="Login">
                <select name="" id="" multiple={true} value={value} onChange={this.change.bind(this)}>
                    <option value="想我这样的人">想我这样的人</option>
                    <option value="消愁">消愁</option>
                    <option value="谁">谁</option>
                </select>
            </div>
        );
    }
};
export default Login;
##下拉菜单的多选