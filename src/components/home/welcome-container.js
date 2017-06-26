import {connect} from 'react-redux';
import Welcome from './welcome';

const mapStateToProps = state => ({
  videoList: state.searchResults
});

export default connect(mapStateToProps)(Welcome);
