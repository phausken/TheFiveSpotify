export const getCurrentUserPlaylists = ({session, playlists}) => {

  let currentUserId = session.currentUser.id;
  let playlistIds = Object.keys(playlists).map(id => parseInt(id));
  let playlistsValues = Object.values(playlists);
  let result = [];

  for (let i = 0; i < playlistIds.length; i++){
    if (  playlistsValues[i].user_id === currentUserId ){
      result.push(playlistsValues[i]);
    }
  }

  return result;
};

export const getAllPlaylists = ({session, playlists}) => {
  return playlists;
};

export const getCurrentTrack = ({ui, songs}) => {
  const currentSongId = ui.currentSongId;
  return songs[currentSongId];
};

export const getAllSongs = ({songs}) => {
  return songs;
};
