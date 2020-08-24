import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import UsersList from './views/home/usersList'
import Login from './views/login'
import Signup from './views/signup'
import Edit from './views/editUser'
import Add from './views/addUser'
import { all } from 'redux-saga/effects'
import history from './utils/history'

const rootSaga = function* () {
  yield all([
    ...UsersList.sagas,
    ...Login.sagas,
    ...Signup.sagas,
    ...Edit.sagas,
    ...Add.sagas
  ])
}
const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()
const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return combineReducers({
    routing: routerReducer,
    usersList: UsersList.reducers,
    login: Login.reducers,
    signup: Signup.reducers,
    edit: Edit.reducers,
    add: Add.reducers
  })(state, action)
}
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history)
    )
  )
)
sagaMiddleware.run(rootSaga)
export { store }
