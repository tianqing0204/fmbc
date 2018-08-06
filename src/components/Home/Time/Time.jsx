import React, {Component} from 'react';
import './Time.scss';
class Time extends Component {
    render () {
        // console.log(this.props);
        const {time} = this.props;
        return (
            <li className="time">
                {time}
            </li>
        )
    }
};
export default Time;
