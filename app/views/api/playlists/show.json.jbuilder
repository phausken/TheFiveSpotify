json.set!(@playlist.id) do
  json.extract! @playlist, :id, :name, :user_id, :user, :image_url

  json.songs do
    json.array!(@playlist.songs, :id, :title, :artist)
  end
end
