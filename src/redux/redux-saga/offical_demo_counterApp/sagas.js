import {put, call, takeEvery} from 'redux-saga/effects';

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync(num, str) {
    // 延迟 1s 在执行 + 操作
    yield call(delay, 1000);
    yield put({type: 'INCREMENT'});
}

function* onDecrementAsync(num, str) {
    // 延迟 1s 在执行 - 操作
    yield call(delay, 1000);
    yield put({type: 'DECREMENT'});
}

export default function* rootSaga() {
    console.log("sage:   INCREMENT_ASYNC");
    yield takeEvery("INCREMENT_ASYNC", incrementAsync, 123, '增加');
    yield takeEvery("ONDECREMENT_ASYNC", onDecrementAsync, 435, '减少');
}

