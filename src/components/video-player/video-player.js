import React from 'react'

const VideoPlayer = props => {
  if (props.videoList.length === 0) {
    return <div/>
  }
  if (!props.selectedVideo.hasOwnProperty('snippet')) {
    return <p>Please select a video to watch</p>
  }
  return (
    <div>
      <div>
        <iframe src={`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`} />
      </div>
    </div>
  )
}

export default VideoPlayer
