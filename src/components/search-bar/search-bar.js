import React from 'react'
import { Input, Button, Icon } from 'semantic-ui-react'

const SearchBar = (props) => {
  return (
    <div>
      <Input
        placeholder='Search for your favorite videos here...'
        onChange={ event => props.setSearchTerm(event.target.value)} />
        <Button onClick={ () => props.youtubeSearch(props.searchTerm)}>Search <Icon className="youtube"/></Button>
    </div>
  )
}

export default SearchBar
