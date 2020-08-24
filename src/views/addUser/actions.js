import * as constants from './constants'

export const set = (first_name, last_name, avatar) => ({
  type: constants.SET,
  payload: {
    first_name,
    last_name,
    avatar
  }
})
export const failure = (failure, message) => ({
  type: constants.FAILURE,
  payload: {
    failure,
    message
  }
})
export const loading = (loading) => ({
  type: constants.LOADING,
  payload: {
    loading
  }
})
