export const getCurrentUserPlaylists = ({session, playlists}) => {

  let currentUserId = session.currentUser.id;
  let playlistIds = Object.keys(playlists).map(id => parseInt(id));
  let playlistsValues = Object.values(playlists);
  let result = [];

  for (let i = 0; i < playlistIds.length; i++){
    if (  playlistsValues[i].user_id === currentUserId ){
      result.push(playlistsValues[i]);
    } else if ( playlistsValues[i].followers.includes(currentUserId)){
      result.push(playlistsValues[i]);
    }
  }

  return result;
};

export const getCurrentAuthorPlaylists = ({session, playlists}) => {
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

export const getAllResults = ({search, playlists, songs}) => {

  let songResults = [];
  let playlistResults = [];

  for (let i = 0; i < search.length; i++){
    let type = search[i].searchable_type;
    let id = search[i].searchable_id;
    if ( type === "Playlist" ){
      playlistResults.push(playlists[id]);
    } else if ( type === "Song" ){
      songResults.push(songs[id]);
    }
  }

  return {
    songResults,
    playlistResults,
  };
};
