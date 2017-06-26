import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search-bar/search-bar-container'
import SideBar from './components/sidebar/sidebar-container'
import VideoPlayer from './components/video-player/video-player-container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoPlayer />
        <SideBar />
      </div>
    );
  }
}

export default App;
