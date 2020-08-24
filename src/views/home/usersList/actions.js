import * as constants from './constants'

export const get = (query) => ({
  type: constants.GET,
  payload: {
    query
  }
})
export const set = (data) => ({
  type: constants.SET,
  payload: {
    data
  }
})
export const setTotal = (data) => ({
  type: constants.SET_TOTAL,
  payload: {
    total_pages: data
  }
})
export const setNextPage = (data) => ({
  type: constants.SET_NEXT_PAGE,
  payload: {
    next_page: data
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
export const deleteItem = (id) => ({
  type: constants.DELETE_ITEM,
  payload: {
    id
  }
})
export const deleteItemFailure = (delete_failure, delete_message) => ({
  type: constants.DELETE_ITEM_FAILURE,
  payload: {
    delete_failure,
    delete_message
  }
})
export const deleteItemLoading = (delete_loading) => ({
  type: constants.DELETE_ITEM_LOADING,
  payload: {
    delete_loading
  }
})
