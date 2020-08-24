import { put, takeEvery, call } from 'redux-saga/effects'
import * as constants from './constants'
import * as actions from './actions'
import * as userListActions from '../home/usersList/actions'
import * as service from '../../utils/services'
import { store } from '../../store'
import { push } from 'react-router-redux'

function* getData(action) {
  const { id } = action.payload
  try {
    yield put(actions.loading(true))
    const state = store.getState()
    const getUserList = state.usersList.data
    if (getUserList.length === 0) store.dispatch(push('/')) 
    const user = getUserList.find((item) => item.id === parseInt(id))
    if (user === undefined) {
      alert('there is not any user with this Id')
      store.dispatch(push('/'))
    }
    yield put(actions.set(user))
  } catch (error) {
    yield put(actions.failure(true, error.response.data.error))
    alert(error.response.data.error)
    store.dispatch(push('/'))
  } finally {
    yield put(actions.loading(false))
  }
}
function* saveData(action) {
  const { id, first_name, last_name, avatar } = action.payload
  const newUser = { id: parseInt(id), first_name, last_name, avatar }
  try {
    yield put(actions.loading(true))
    yield put(actions.set(newUser))
    yield call(service.makePatchReq, {
      url: `/users/${id}`,
      data: { first_name, last_name }
    })
    const state = store.getState()
    const getUserList = state.usersList.data
    const newUserArray = [newUser]
    const newUserList = getUserList.map(
      (obj) => newUserArray.find((o) => o.id === obj.id) || obj
    )
    yield put(userListActions.set(newUserList))
    store.dispatch(push('/'))
  } catch (error) {
    yield put(actions.failure(true, error.response.data.error))
    alert(error.response.data.error)
  } finally {
    yield put(actions.loading(false))
  }
}

export function* getDataSaga() {
  yield takeEvery(constants.GET, getData)
}
export function* saveDataSaga() {
  yield takeEvery(constants.UPDATE, saveData)
}
export default [getDataSaga(), saveDataSaga()]
