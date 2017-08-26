export const fetchSongs = () => {
  return $.ajax({
    url: 'api/playlists',
    method: 'GET',
  });
};
