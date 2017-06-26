import * as CONST from '../constants/constants';

export const search = (state = '', action) => {
  switch (action.type) {
    case CONST.SEARCH:
      return action.search
    default:
      return state
  }
};

export const searchResults = (state = [], action) => {
  switch (action.type) {
    case CONST.SEARCH_RESULTS_FULFILLED:
      return Object.assign({}, state, action.payload)
    default:
      return state

  }
};

export const selectedVideo = (state = {}, action) => {
  switch (action.type) {
    case CONST.SELECTED_VIDEO:
      return Object.assign({}, state, action.video)
    default:
      return state
  }
};
