import { call, put, takeEvery} from 'redux-saga/effects'
import { santaApi } from '../services'
import * as actions from '../actions'

function* fetchWishes(action) {
   try {
      const wishes = yield call(santaApi.getWishes);
      yield put({type: actions.REQUEST_WISHES_SUCCESS, wishes: wishes.data});
   
   } catch (e) {
      yield put({type: actions.REQUEST_WISHES_FAILURE, message: e.message});
   }
}

function* rootSaga() {
  yield takeEvery(actions.REQUEST_WISHES, fetchWishes);
}

export default rootSaga;