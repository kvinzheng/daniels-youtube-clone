import React from 'react';
import renderIf from 'render-if';

const Welcome = props => (
  <div>
    <h2>Welcome to Daniel's YouTube Clone!</h2>
    {renderIf(props.videoList.length === 0)(
      <p>To get started please search for videos using the search bar in the upper righthand corner</p>
    )}
  </div>
);

export default Welcome;
