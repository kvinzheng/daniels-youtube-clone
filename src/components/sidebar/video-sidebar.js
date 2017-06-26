import React from 'react';
import { Card } from 'semantic-ui-react';
import RenderYouTubeCards from './video-cards';
import './sidebar.css';

const SideBar = props => {
  if (props.videoList.length === 0) {
    return <div />
  }
  return (
    <div className="sidebar">
      <h5><b>Current Search Term:</b> {props.search}</h5>
      <Card.Group>
        {RenderYouTubeCards(props)}
      </Card.Group>
    </div>
  );
};

export default SideBar;
