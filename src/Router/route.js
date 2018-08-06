import Loadable from 'react-loadable';
import Load from '../components/common/loading';
const Home = Loadable({
    loader: () => import('../containers/Home'),
    loading: Load
});
const Detall = Loadable({
    loader: () => import('../containers/Detall'),
    loading: Load
});
export default {
    Home,
    Detall
};