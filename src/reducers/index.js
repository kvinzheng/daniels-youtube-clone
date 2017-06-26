import { combineReducers } from 'redux';
import { search, searchResults, selectedVideo } from './youtubeSearch';

const youtubeApp = combineReducers({
search,
selectedVideo,
searchResults,
});

export default youtubeApp
