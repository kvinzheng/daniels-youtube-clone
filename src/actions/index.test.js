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
  //WHY IS youtubeSearch UNTESTABLE in its current form?!?!
  xit('youtubeSearch Action', () => {

  })
  it('selectedToShow', () => {
    //Write test for selectedToShow
  })
})
