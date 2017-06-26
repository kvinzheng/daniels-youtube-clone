import { connect } from 'react-redux';
import VideoPlayer from './video-player';


const mapStateToProps = state => ({
  selectedVideo: state.selectedVideo,
  videoList: state.searchResults
});


export default connect(mapStateToProps)(VideoPlayer);
