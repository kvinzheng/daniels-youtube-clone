import React from 'react'
import { Input, Button, Icon, Menu } from 'semantic-ui-react'
import './searchbar.css'

const SearchBar = (props) => {
  return (
    <Menu inverted>
      <Menu.Item position="left" className="title">
        Daniel's YouTube Clone
      </Menu.Item>
      <Menu.Item position="right">
        <Input
          className="searchField"
          placeholder='Search for your favorite videos here...'
          onChange={ event => props.setSearchTerm(event.target.value)} />
          <Button onClick={ () => props.youtubeSearch(props.searchTerm)} color="red" className="searchButton">
            <Icon size="large" className="youtube"/>
          </Button>
      </Menu.Item>
    </Menu>
  )
}

export default SearchBar
