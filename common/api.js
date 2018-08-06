import axios from 'axios';
export const get = (url) => {
    return axios.get(url).then((res) => {
        return res;
    }).catch((e) => {
        throw new Error(e);
    });
};
