import * as constants from './constants'

export const set = (data) => ({
  type: constants.SET,
  payload: {
    user: data
  }
})

export const update = (id, first_name, last_name, avatar) => ({
  type: constants.UPDATE,
  payload: {
    id,
    first_name,
    last_name,
    avatar
  }
})

export const get = (id) => ({
  type: constants.GET,
  payload: {
    id
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
