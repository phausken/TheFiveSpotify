json.extract! user, :id, :username
json.playlist_ids do
  json.array! (user.playlists.ids)
end
