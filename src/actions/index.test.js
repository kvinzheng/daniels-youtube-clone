import * as CONST from '../constants/constants';
import * as ACTIONS from './index'

describe('Actions Tests', () => {
  it('setSearchTerm Action', () => {
    let search = 'bulldog'
    let expected = {
      type: CONST.SEARCH,
      search
    }
    let result = ACTIONS.setSearchTerm(search)
    expect(result).toEqual(expected)
  })
  // xit('youtubeSearch Action', () => {
  //   let term = 'bulldog'
  //   const ytSearch = jest.spyOn(ACTIONS, 'ytSearch').mockImplementation(() => 'called')
  //   let expected = {
  //     type: CONST.SEARCH_RESULTS,
  //     payload: ytSearch(term)
  //   }
  //   expect(ytSearch).toHaveBeenCalled()
  //   expect(ytSearch.mock.calls[0][0]).toBe('bulldog')
  //   let result = ACTIONS.youtubeSearch(term)
  //   expect(result).toEqual(expected)
  // })
  it('selectedToShow', () => {
    let video = { test: 'lots of videos!'}
    let expected = {
      type:CONST.SELECTED_VIDEO,
      video
    }
    let result = ACTIONS.selectedToShow(video)
    expect(result).toEqual(expected)
  })
})
