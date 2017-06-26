import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from './search-bar'
import { setSearchTerm, youtubeSearch } from '../../actions/index'

const mapStateToProps = state => ({
  searchTerm: state.search
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setSearchTerm,
  youtubeSearch }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
