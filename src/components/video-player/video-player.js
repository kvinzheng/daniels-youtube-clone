import React from 'react';
import './video-player.css';

const VideoPlayer = props => {
  if (props.videoList.length === 0) {
    return <div/>;
  }
  if (!props.selectedVideo.hasOwnProperty('snippet')) {
    return <p>Please select a video to watch</p>;
  }
  return (
    <div className="videoPlayer">
      <div>
        <iframe className="player" src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`} />
      </div>
      <div className="videoDescription">
        <h3 className="videoTitle">{props.selectedVideo.snippet.title}</h3>
        <h5>{`Channel: ${props.selectedVideo.snippet.channelTitle}`}</h5>
        <p>{props.selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
