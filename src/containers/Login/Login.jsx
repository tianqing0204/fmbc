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
