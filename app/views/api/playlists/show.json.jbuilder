json.set!(@playlist.id) do
  json.extract! @playlist, :id, :name, :user_id, :user, :image_url
  json.song_ids do
    json.array!(@playlist.songs.ids)
  end
end
