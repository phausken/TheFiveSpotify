import * as APIUtil from '../util/song_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';

export const receiveSongs = (songs) => {
  return {
    type: RECEIVE_SONGS,
    songs,
  };
};

export const fetchSongs = () => dispatch => {
  return APIUtil.fetchSongs().then(songs => dispatch(receiveSongs(songs)));
};
