import * as constants from './constants'

export const attempt = (email, password) => ({
  type: constants.ATTEMPT,
  payload: {
    params: { email, password }
  }
})
export const failure = (failure, msg) => ({
  type: constants.FAILURE,
  payload: {
    failure: failure,
    message: msg
  }
})
export const loading = (isLoading) => ({
  type: constants.LOADING,
  payload: {
    loading: isLoading
  }
})
