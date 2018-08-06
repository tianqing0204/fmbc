import React, {Component} from 'react';
import './Header.scss';
import { Icon, Grid } from 'antd-mobile';
class Head extends Component {
    render () {
        return (
            <div className="header">
                <div className="left">
                    <dl>
                        <dt>
                            <span>未登录</span>
                        </dt>
                        <dd>
                            {/* <Icon type="check"/> */}
                        </dd>
                    </dl>
                </div>
                <h1>分秒必猜</h1>
                <div className="right">
                    <div className="sou">
                      
                    </div>
                    
                </div>
            </div>
        );
    }
};
export default Head;
