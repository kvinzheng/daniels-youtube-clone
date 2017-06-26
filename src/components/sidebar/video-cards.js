import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './sidebar.css';

const RenderYouTubeCards = props => (
  props.videoList.items.map(video => (
    <Card className="singleCard" key={video.id.videoId} onClick={ () => props.selectedToShow(video)}>
      <Image src={video.snippet.thumbnails.medium.url} />
      <Card.Header className="titleCard">
        <b>{video.snippet.title}</b>
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {`Date Published ${video.snippet.publishedAt}`}
        </span>
      </Card.Meta>
      <Card.Description className="cardDescription">
        <p><b>Description: </b>{video.snippet.description}</p>
      </Card.Description>
    </Card>
  ))
);

export default RenderYouTubeCards;
