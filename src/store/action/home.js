export const actionHome = (res) => {
    return {
        type: 'QQ_SJ',
        res
    };
};
export const actionNum = (id) => {
    return {
        type: 'QQ_LIST',
        id
    };
};
export const actionList = (list) => {
    return {
        type: 'QQ_CHANGE_SUCCESS',
        list
    };
};
export const actionBigNav = (newData) => {
    return {
        type: 'QQ_NEW',
        newData
    };
};
export const actionDaShuju = (filterData) => {
    return {
        type: 'QQ_SHUJU',
        filterData
    };
};
export const actionIndex = (index, texts) => {
    return {
        type: 'QQ_INDEXS',
        index,
        texts
    };
};
export const actionqk = () => {
    return {
        type: 'QQ_CHANGE_REQUIRE'
    };
};
export const actionSl = (lsJson) => {
    return {
        type: 'QQ_LS',
        lsJson
    };
};
export const actionHydata = (yuanData) => {
    return {
        type: 'QQ_HYDATA',
        yuanData
    };
};
