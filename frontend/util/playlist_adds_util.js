export const createPlaylistAdd = playlistAdd => {
  return $.ajax({
    url: `api/playlist_adds`,
    method: "POST",
    data: { playlistAdd }
  });
};

export const deletePlaylistAdd = playlistAdd => {
  return $.ajax({
    url: `api/playlist_adds/${playlistAdd.id}`,
    method: "DELETE",
    data: { playlistAdd }
  });
};
