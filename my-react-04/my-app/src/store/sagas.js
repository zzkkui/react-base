import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { initTodoListAction } from './actionCreators';
import { GET_INIT_LIST } from './actionTypes';

function* getInitList() {
  try {
    const res = yield axios.get('/todoList');
    const action = initTodoListAction(res.data);
    yield put(action)
  } catch (e) {
    console.log('list.json 请求失败')
  }  
}
/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;