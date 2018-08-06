import React, {Component} from 'react';
import './Home.scss';
import axios from 'axios';
import Homes from '../../components/Home';
import {get} from '../../../common/api';
import {baseurl} from '../../../common/baseurl';
import {connect} from 'react-redux';
import {actionHome, actionNum, actionList, actionBigNav, actionDaShuju, actionIndex, actionqk, actionSl, actionHydata} from '../../store/action/home';
class Home extends Component {
    componentDidMount () {
        get('https://trad-pusher.8win.com/match/v2?k=cn010001').then((res) => {
            const listDate = JSON.parse(res.data.data);
            this.filters(listDate);
            dispatch(actionList(listDate));
        });
        const {dispatch} = this.props;
        get(`${baseurl}/nav`).then((res) => {
            if (res.data.code === 0) {
                const data = res.data.data.data;
                const bigData = [...data, ...data];
                dispatch(actionBigNav(bigData));
                this.initNav(bigData, '更多');
            }
        });
    }
    initNav (bigData, names) {
        const {dispatch} = this.props;
        let sliceNav = null;
        if (bigData.length > 7) {
            sliceNav = bigData.slice(0, 7);
        }
        sliceNav.push({name: names, sportType: 'more'});
        dispatch(actionHome(sliceNav));
    }
    changeId (val, navname) {
        if (val !== 'more' && val !== 'yc') {
            if (val < 10) {
                val = `0${val}`;
            }
            get(`https://trad-pusher.8win.com/match/v2?k=cn0100${val}`).then((res) => {
                const listDate = JSON.parse(res.data.data);
                this.filters(listDate);
                dispatch(actionqk());
                dispatch(actionList(listDate));
            });
            const {dispatch} = this.props;
            dispatch(actionNum(val));
            const {nav} = this.props;
            this.initNav(nav, navname);
        } else if (val === 'more') {
            const {newData, dispatch} = this.props;
            dispatch(actionHome([...newData, {name: '隐藏', sportType: 'yc'}]));
        } else {
            const {nav} = this.props;
            this.initNav(nav, navname);
        }
    }
    filters (list) {
        const { dispatch } = this.props;
        const jsons = {};
        const arr = [];
        // const { list } = this.props;
        if (list !== null) {
            for (let item of list) {
                const shijian = item.matchTime.split(' ')[0];
                arr.push(shijian);
            }
            const qc = new Set(arr);
            for (let sj of qc) {
                jsons[sj] = [];
                for (let datas of list) {
                    if (sj === datas.matchTime.split(' ')[0]) {
                        jsons[sj].push(datas);
                    }
                }
            }
            dispatch(actionDaShuju(jsons));
        }
    }
    changeIndex (indexs, texts) {
        // console.log(indexs);
        const { dispatch } = this.props;
        dispatch(actionIndex(indexs, texts));
    }
    sj () {
        const { dispatch } = this.props;
        // console.log(this.props, '22222222222222222222222222222');
        const { yuanData } = this.props;
        dispatch(actionDaShuju(yuanData));
       
        // const { dispatch } = this.props;
        // console.log(111111111111111);
        // dispatch(actionDaShuju(lsjson));

    }
    sai (sj) {
        const { dispatch } = this.props;
        const {list} = this.props;
        let lsjson = {};
        let brr = [];
        // console.log(list);
        for (let keys of list) {
            brr.push(keys.leagueName);
        }
        const newBrr = new Set(brr);
        for (let lists of newBrr) {
            lsjson[lists] = [];
            for (let ha of list) {
                if (lists === ha.leagueName) {
                    lsjson[lists].push(ha);
                }
            }
        }
        dispatch(actionSl(lsjson));
        const { filterData } = this.props;
        // console.log(da);
        dispatch(actionDaShuju(lsjson));
        // console.log(filterData, '很重要');
        dispatch(actionHydata(filterData));
    }
    render () {
        // console.log(this.props, '22222222222222222222222222222');
        const {nav, id, list, filterData, index, lsJson, texts} = this.props;
        console.log(filterData, '111111111111');
        // if (filterData !== null) {
        //     for (let tq of filterData) {
        //         console.log(tq);
        //     }
        // }
        return (
            <div className="home">
                {
                    nav !== null ? <Homes 
                        nav={nav}
                        id={id}
                        list={list}
                        index={index}
                        filterData={filterData}
                        gaibianId={this.changeId.bind(this)}
                        gbIndex={this.changeIndex.bind(this)}
                        shijian={this.sj.bind(this)}
                        bs={this.sai.bind(this)}
                        lsJson={lsJson}
                        texts = {texts}
                    ></Homes> : ''
                } 
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        nav: state.home.nav,
        id: state.home.id,
        list: state.home.list,
        newData: state.home.newData,
        filterData: state.home.filterData,
        index: state.home.index,
        lsJson: state.home.lsJson,
        texts: state.home.texts,
        yuanData: state.home.yuanData
    };
};
export default connect(mapStateToProps)(Home);
