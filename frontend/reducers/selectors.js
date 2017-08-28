export const getCurrentUserPlaylists = ({session, playlists}) => {

  let matchIds = session.currentUser.playlist_ids;
  let playlistIds = Object.keys(playlists).map(id => parseInt(id));
  let result = [];

  for (let i = 0; i < playlistIds.length; i++){
    if (matchIds.includes(playlistIds[i])){
      result.push(playlists[playlistIds[i]]);
    }
  }

  return result;
};

export const getAllPlaylists = ({session, playlists}) => {
  return playlists;
};

export const getAllSongs = ({songs}) => {
  return songs;
}
