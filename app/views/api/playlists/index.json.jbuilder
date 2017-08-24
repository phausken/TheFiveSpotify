@playlists.each do |playlist|
  json.set!(playlist.id) do
    json.extract! playlist, :id, :name, :user_id, :image_url
    json.song_ids do
      json.array!(playlist.songs.ids)
    end
  end
end
