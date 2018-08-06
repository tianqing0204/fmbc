import {combineReducers} from 'redux';
import home from './home';
import detall from './detall';
const hebin = combineReducers({
    home,
    detall
});
export default hebin;
