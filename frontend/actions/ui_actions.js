export const CURRENT_PLAYLIST = 'CURRENT_PLAYLIST';
export const CURRENT_SONG = 'CURRENT_SONG';

export const receiveCurrentPlaylist = (playlist) => {
  return {
    type: CURRENT_PLAYLIST,
    playlist
  };
};

export const receiveCurrentSong = (song) => {
  return {
    type: CURRENT_SONG,
    song,
  };
};
