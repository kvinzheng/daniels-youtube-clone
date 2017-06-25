import axios from 'axios';
import * as CONST from '../constants/constants';
import API_KEY from './apiKey'

export const setSearchTerm = (search) => ({
  type: CONST.SEARCH,
  search
})

const ytSearch = term => {
  let url = 'https://www.googleapis.com/youtube/v3/search'
  let params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };

  return axios(url, { params: params }).then(response => response.data)
}


export const youtubeSearch = (term) => ({
  type: CONST.SEARCH_RESULTS
  payload: ytSearch(term)
})
