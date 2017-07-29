import React from 'react';
import SearchBar from './search-bar';
import { mapStateToProps, mapDispatchToProps } from './search-bar-container'
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('SearchBar', () => {
  it('SearchBar Renders', () => {
    const component = shallow(<SearchBar />)
    expect(component).toMatchSnapshot()
  })
  it('Click on search is called with correct arguments', () => {
    const searchTerm = 'bulldog'
    const youtubeSearch = jest.fn()
    const searchbar = mount(<SearchBar youtubeSearch={ youtubeSearch } searchTerm={searchTerm} />)

    searchbar.find('button').simulate('click')
    expect(youtubeSearch).toHaveBeenCalled()
    expect(youtubeSearch.mock.calls[0][0]).toBe(searchTerm)
  })
  it('Typing will call a set searchTerm', () => {
    const setSearchTerm = jest.fn()
    const searchbar = mount(<SearchBar setSearchTerm={ setSearchTerm } searchTerm={'dog'} />)

    searchbar.find('input').simulate('change', {target: {value:'bulldog'}})
    expect(setSearchTerm).toHaveBeenCalled()
    expect(setSearchTerm.mock.calls[0][0]).toBe('bulldog')
  })
  it('mapStateToProps works correctly', () => {
    const state = {search: 'bulldog'}
    const result = mapStateToProps(state)
    const expected = {searchTerm: 'bulldog'}
    expect(result).toEqual(expected)
  })
})
