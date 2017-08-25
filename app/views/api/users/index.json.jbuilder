@users.each do |user|
  json.set!(user.id) do
    json.extract! user, :username
    json.playlist_ids do
      json.array!(user.playlists.ids)
    end
  end
end
