export const CURRENT_PLAYLIST = 'CURRENT_PLAYLIST';
export const CURRENT_SONG = 'CURRENT_SONG';
export const NEXT_PLAYLIST = 'NEXT_PLAYLIST';
export const PAUSE_TRACK = 'PAUSE_TRACK';
export const PLAY_TRACK = 'PLAY_TRACK';
export const PREVIOUS_PLAYLIST = 'PREVIOUS_PLAYLIST';

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

export const nextPlaylist = () => {
  return {
    type: NEXT_PLAYLIST
  };
};

export const previousPlaylist = () => {
  return {
    type: PREVIOUS_PLAYLIST
  };
};

export const pauseTrack = () => {
  return {
    type: PAUSE_TRACK,
  };
};

export const playTrack = () => {
  return {
    type: PLAY_TRACK,
  };
};
