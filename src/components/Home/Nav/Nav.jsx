import React, {Component} from 'react';
import classnames from 'classnames';
import './Nav.scss';
class Navs extends Component {
    handleClick () {
        // console.log(this.props);
        const {text, index} = this.props;
        // console.log(text.sportType);
        const id = text.sportType;
        // console.log(id);
        const {changeId} = this.props;
        const navname = index > 6 && id !== 'more' && id !== 'yc' ? text.name : '更多';
        // console.log(navname);
        changeId(id, navname);
    }
    render () {
        const {text} = this.props;
        return (
            <li className="navs"
                onClick={this.handleClick.bind(this)}
            >
                <span>
                    {text.name}
                </span>
                <span>
                    {text.matchCount}
                </span>

            </li>
        );
    }
};
export default Navs;
