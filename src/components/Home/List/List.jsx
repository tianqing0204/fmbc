import React, {Component} from 'react';
import './List.scss';
class List extends Component {
    time () {
        const { sj } = this.props;
        sj();

    }
    sai () {
        const { liansai } = this.props;
        liansai();
    }
    gz () {

    }
    render () {
        // console.log(this.props, '11111');
        const {id} = this.props;
        // console.log(id);
        return (
            <div className="list">
                <span onClick={this.time.bind(this)}>按时间</span>
                {
                    id === '00' || id === '01' ? <span onClick={this.sai.bind(this)}>按联赛</span> : ''
                }
                <span onClick={this.gz.bind(this)}>我的关注</span>
            </div>
        );
    }
};
export default List;
