import { put, call, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
function * worker () {
    yield put({
        type: 'SUCCESS'
    });
}
function * watcher () {
    yield takeEvery('REQUIRE', worker);
};
export default function * rootSaga () {
    yield fork(watcher);
};
