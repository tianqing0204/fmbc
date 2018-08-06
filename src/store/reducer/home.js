const initalstate = {
    nav: null,
    id: '00',
    list: null,
    newData: null,
    index: 0,
    lsJson: null,
    texts: null,
    yuanData: null
};
export default (state = initalstate, action) => {
    switch (action.type) {
    case 'QQ_SJ':
        return Object.assign({}, state, {nav: action.res});
    case 'QQ_LIST':
        return Object.assign({}, state, {id: action.id});
    case 'QQ_CHANGE_REQUIRE':
        return Object.assign({}, state, {list: []});
    case 'QQ_CHANGE_SUCCESS':
        return Object.assign({}, state, {list: action.list});
    case 'QQ_NEW':
        return Object.assign({}, state, {newData: action.newData});
    case 'QQ_SHUJU':
        return Object.assign({}, state, {filterData: action.filterData});
    case 'QQ_INDEXS':
        return Object.assign({}, state, {index: action.index, texts: action.texts});
    case 'QQ_LS':
        return Object.assign({}, state, {lsJson: action.lsJson});
    case 'QQ_HYDATA':
        return Object.assign({}, state, {yuanData: action.yuanData});
    default:
        return state;
    }
};
