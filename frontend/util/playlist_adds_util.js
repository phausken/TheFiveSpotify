export const createPlaylistAdd = (playlistAdd) => {
  return $.ajax({
    url: `api/playlist_adds`,
    method: 'POST',
    data: { playlistAdd },
  });
};

export const deletePlaylistAdd = (id) => {
  return $.ajax({
    url: `api/playlist_add/${id}`,
    method: 'DELETE',
    data: { playlistAdd },
  });
};
