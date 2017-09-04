export const createPlaylistFollow = (playlistFollow) => {
  return $.ajax({
    url: `api/playlist_follows`,
    method: 'POST',
    data: { playlistFollow },
  });
};

export const deletePlaylistFollow = (playlistFollow) => {
  return $.ajax({
    url: `api/playlist_follows/${playlistFollow.id}`,
    method: 'DELETE',
    data: { playlistFollow }
  });
};
