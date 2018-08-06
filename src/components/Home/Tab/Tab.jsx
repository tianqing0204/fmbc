import React, {Component} from 'react';
import Time from '../Time';
import './Tab.scss';
class Tab extends Component {
    handle () {
        const { index, text } = this.props;
        const { changeIndex } = this.props;
        changeIndex(index, text);
        // console.log(text);
    }
    render () {
        const { text } = this.props;
        // console.log(text);
        // console.log(text, '222222222222222222222222');
        const days = new Date(text);
        const arr = ['日', '一', '二', '三', '四', '五', '六'];
        const xzq = days.getDay();
        const ha = `星期${arr[xzq]}`;
        // console.log(text, 'text');
        return (
            <li className="tab" onClick={this.handle.bind(this)}>
                <p>
                    {
                        text.includes('-') ? ha : ''
                    }
                </p>
                {text}
            </li>
        );
    }
};
export default Tab;
