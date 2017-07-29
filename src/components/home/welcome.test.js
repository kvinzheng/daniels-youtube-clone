import React from 'react';
import Welcome from './welcome';
import { mapStateToProps } from './welcome-container'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Welcome Component', () => {
  it('Renders without any videos', () => {
    const component = shallow(<Welcome videoList={[]} />)
    expect(component).toMatchSnapshot()
  })
  it('Renders with some videos', () => {
    const component = shallow(<Welcome videoList={[1]} />)
    expect(component).toMatchSnapshot()
  })
  it('mapStateToProps returns the correct state', () => {
    let state = {searchResults: [1,2,3]}
    const result = mapStateToProps(state)
    const expected = {videoList: [1,2,3]}
    expect(result).toEqual(expected)
  })
})
