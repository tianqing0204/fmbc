import React, {Component} from 'react';
import './Home.scss';
import Navs from './Nav';
import List from './List';
import Tab from './Tab';
import Rights from './Rights';
class Homes extends Component {
    gaibian (val, navname) {
        // console.log(val);
        const {gaibianId} = this.props;
        gaibianId(val, navname);
    }
    mapRight (haha) {
        const { filterData } = this.props;
        if (haha) {
            const { index } = this.props;
            return Object.values(filterData)[index] && Object.values(filterData)[index].map((v, i) => {
                return <Rights {...v} key={i}></Rights>;
            });
        }
    }
    mapData (haha) {
        const { filterData } = this.props;
        if (haha) {
            return Object.keys(filterData) && Object.keys(filterData).map((v, i) => {
                return <Tab key={i} index={i} text={v} changeIndex={this.gaibianIndex.bind(this)}></Tab>;
            });
        }
    }
    sai () {
        const {bs} = this.props;
        bs();
    }
    time () {
        const { shijian } = this.props;
        shijian();
    }
    gaibianIndex (val, texts) {
        // console.log(texts);
        const {gbIndex} = this.props;
        gbIndex(val, texts);
    }
    render () {
        const {nav, id, lsJson, filterData} = this.props;
        return (
            <div className="homes">
                <ul className="oul">
                    {
                        nav.map((v, i) => {
                            return <Navs 
                                text={v}
                                key={i}
                                index={i}
                                changeId={this.gaibian.bind(this)}
                            ></Navs>;
                        })
                    }
                </ul>
                <List 
                    id={id}
                    liansai={this.sai.bind(this)}
                    sj={this.time.bind(this)}
                
                ></List>
                <div className="nam">
                    <ul className="ha-list">
                        {
                            this.mapData(filterData)
                        }
                    </ul>
                    <div className="ha-right">
                        {
                            this.mapRight(filterData)
                        }
                    </div>

                </div>
            </div>
        );
    }
};
export default Homes;
