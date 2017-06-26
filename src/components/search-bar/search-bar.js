import React from 'react';
import { Input, Button, Icon, Menu } from 'semantic-ui-react';
import './searchbar.css';

const SearchBar = props => (
  <Menu inverted className="navSearch">
    <Menu.Item className="title">
      Daniel's YouTube Clone <Icon size="large" className="youtube"/>
    </Menu.Item>
    <Menu.Item>
      <a href={'https://github.com/danielmarcgardner/daniels-youtube-clone'}>Checkout The Code <Icon size="large" className="github"/></a>
    </Menu.Item>
    <Menu.Item position="right">
      <Input
        className="searchField"
        placeholder='Search for your favorite videos here...'
        onChange={ event => props.setSearchTerm(event.target.value)} />
      <Button onClick={ () => props.youtubeSearch(props.searchTerm)} color="red" className="searchButton">
        Search!
      </Button>
    </Menu.Item>
  </Menu>
);

export default SearchBar;
