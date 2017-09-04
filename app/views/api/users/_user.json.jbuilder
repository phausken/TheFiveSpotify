json.extract! user, :id, :username
json.playlist_ids do
  json.array! (user.playlists.ids)
end
json.followed_playlists do
  json.array! (user.followed_playlists.ids)
end
