import { combineReducers } from 'redux';
import { search, selectedVideo } from './youtubeSearch'

const youtubeApp = combineReducers({
search,
selectedVideo
})
export default youtubeApp
