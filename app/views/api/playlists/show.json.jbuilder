json.set!(@playlist.id) do
  json.extract! @playlist, :id, :name, :user_id, :user, :image_url
  json.song_ids do
    json.array!(@playlist.songs.ids)
  end
  json.songs do
    json.array!(@playlist.songs, :id, :title, :artist)
  end
  json.playlistAdds do
    json.array!(@playlist.playlist_adds, :id, :song_id)
  end
end
