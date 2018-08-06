import { put, call, fork } from 'redux-saga/effects';
import rootSaga from './home';
export default function * () {
    yield fork(rootSaga);
};
