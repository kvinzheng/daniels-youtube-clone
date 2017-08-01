import { connect } from 'react-redux';
import VideoPlayer from './video-player';


export const mapStateToProps = state => ({
  selectedVideo: state.selectedVideo,
  videoList: state.searchResults
});


export default connect(mapStateToProps)(VideoPlayer);
