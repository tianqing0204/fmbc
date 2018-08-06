import Route from './route';
export default {
    link: [
        {
            to: '/',
            text: '首页'
        },
        {
            to: '/detall',
            text: '详情'
        }
    ],
    route: [
        {
            path: '/',
            component: Route.Home
        },
        {
            path: '/detall',
            component: Route.Detall
        }
    ]
};
