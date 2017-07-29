import { search, searchResults, selectedVideo } from './youtubeSearch'
import * as CONST from '../constants/constants';

const payload = {
  kind: "youtube#searchListResponse",
  etag: "m2yskBQFythfE4irbTIeOgYYfBU/GgvMK4ylf3TeB2LfxKgcQibEi3Q",
  nextPageToken: "CBkQAA",
  regionCode: "US",
  pageInfo: {
    totalResults: 100000,
    resultsPerPage: 25,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "m2yskBQFythfE4irbTIeOgYYfBU/G_hvtJMNs9E5ty35jOMMF7jy3no",
      id: {
        kind: "youtube#video",
        videoId: "nyZk6CGdfhM"
      },
      snippet:{
        publishedAt: "2014-08-15T21:01:52.000Z",
        channelId: "UCnAignIM-7Hu5hohCbpV55A",
        title: "10 Funniest Bulldog Videos",
        description: "JOIN THE FUZZIES! http://www.youtube.com/subscription_center?add_user=worldsfuzziestvideos NEW VIDS FRIDAYS @ 6ET!! LIKE, COMMENT & SHARE!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/nyZk6CGdfhM/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/nyZk6CGdfhM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/nyZk6CGdfhM/hqdefault.jpg",
            width: 480,
            height: 360,
          }
        },
        channelTitle: "World's Fuzziest Videos",
        liveBroadcastContent: "none",
      }
    },
    {
      kind: "youtube#searchResult",
      etag: "m2yskBQFythfE4irbTIeOgYYfBU/5YPjtxpLjyXwD-hRe66HvxbBMR0",
      id: {
        kind: "youtube#video",
        videoId: "FGJxDlYHC-s"
      },
      snippet:{
        publishedAt: "2013-10-25T10:00:02.000Z",
        channelId: "UChl6CG-V7LgqhfwkvbHH67Q",
        title: "Bulldogs Are Awesome: Compilation",
        description: "In this bulldog compilation, check out some of our favorite Petsami Bulldogs. We hope you enjoy these cute dogs as much as we do. From puppies to full grown ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/FGJxDlYHC-s/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/FGJxDlYHC-s/default.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/FGJxDlYHC-s/default.jpg",
            width: 480,
            height: 360,
          }
        },
        channelTitle: "Waggle TV",
        liveBroadcastContent: "none",
      }
    },
  ]
}

const video = {
      kind: "youtube#searchResult",
      etag: "m2yskBQFythfE4irbTIeOgYYfBU/G_hvtJMNs9E5ty35jOMMF7jy3no",
      id: {
        kind: "youtube#video",
        videoId: "nyZk6CGdfhM"
      },
      snippet:{
        publishedAt: "2014-08-15T21:01:52.000Z",
        channelId: "UCnAignIM-7Hu5hohCbpV55A",
        title: "10 Funniest Bulldog Videos",
        description: "JOIN THE FUZZIES! http://www.youtube.com/subscription_center?add_user=worldsfuzziestvideos NEW VIDS FRIDAYS @ 6ET!! LIKE, COMMENT & SHARE!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/nyZk6CGdfhM/default.jpg",
            width: 120,
            height: 90
          },
          medium: {
            url: "https://i.ytimg.com/vi/nyZk6CGdfhM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/nyZk6CGdfhM/hqdefault.jpg",
            width: 480,
            height: 360,
          }
        },
        channelTitle: "World's Fuzziest Videos",
        liveBroadcastContent: "none",
      }
    }

describe('Reducers', () => {
  it('search reducer', () => {
    const initialState = ''
    const action = {
      type: CONST.SEARCH,
      search: 'Test'
    }
    const expected = 'Test'
    const result = search(initialState, action)
    expect(result).toEqual(expected)
  })
  it('searchResults reducer', () => {
    const initialState = []
    const action = {
      type: CONST.SEARCH_RESULTS_FULFILLED,
      payload
    }
    const expected = payload
    const result = searchResults(initialState, action)
    expect(result).toEqual(expected)
  })
  it('selectedVideo', () => {
    const initialState = {}
    const action = {
      type: CONST.SELECTED_VIDEO,
      video
    }
    const result = selectedVideo(initialState, action)
    const expected = video
    expect(result).toEqual(expected)
  })
})
