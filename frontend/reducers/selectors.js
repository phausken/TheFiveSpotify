export const getCurrentUserPlaylists = ({session, playlists}) => {
  const matchIds = session.currentUser.playlist_ids;
  const playlistIds = Object.keys(playlists).map(id => parseInt(id));
  let result = [];

  for (let i = 0; i < playlistIds.length; i++){
    if (matchIds.include(playlistIds[i])){
      result.push(playlists[playlistIds[i]]);
    }
  }

  return result;
};
