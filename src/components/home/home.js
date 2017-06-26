import React from 'react';
import {Container} from 'semantic-ui-react';
import SearchBar from '../search-bar/search-bar-container';
import SideBar from '../sidebar/sidebar-container';
import VideoPlayer from '../video-player/video-player-container';
import Welcome from './welcome-container';

const Home = props => (
  <div>
    <SearchBar/>
    <Container>
      <Welcome/>
      <VideoPlayer/>
      <SideBar/>
    </Container>
  </div>
);

export default Home;
