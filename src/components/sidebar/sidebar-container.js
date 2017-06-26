import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SideBar from './video-sidebar'
import { selectedToShow } from '../../actions/index'

const mapStateToProps = state => ({
  videoList: state.searchResults
})

const mapDispatchToProps = dispatch => bindActionCreators({ selectedToShow }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
