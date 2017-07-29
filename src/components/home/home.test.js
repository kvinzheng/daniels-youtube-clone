import React from 'react';
import Home from './home';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Home Component Test', () => {
  it('It Renders', () => {
    const component = shallow(<Home />)
    expect(component).toMatchSnapshot()
  })
})
