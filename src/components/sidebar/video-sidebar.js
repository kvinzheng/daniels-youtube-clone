import React from 'react'
import { Card } from 'semantic-ui-react'
import RenderYouTubeCards from './video-cards'
import './sidebar.css'

const SideBar = props => {
  if (props.videoList.length === 0) {
    return <p>Please Search for some videos!</p>
  }
  return (
    <div className="sidebar">
      <Card.Group>
        {RenderYouTubeCards(props)}
      </Card.Group>
    </div>
  )
}

export default SideBar
