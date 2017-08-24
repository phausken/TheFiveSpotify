# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

User1 = User.create(username: "phausken", password: "password")
User2 = User.create(username: "zhausken", password: "password")
User3 = User.create(username: "Guest", password: "password")

Playlist.destroy_all

Playlist1 = Playlist.create(name: "50s Jazz", image_url: 'img1', user_id: User1.id)
Playlist2 = Playlist.create(name: "60s Jazz", image_url: 'img1', user_id: User2.id)

Song.destroy_all

Song1 = Song.create(title: "So What")
Song2 = Song.create(title: "Moments Notice")
Song3 = Song.create(title: "Freedom Jazz Dance")
Song4 = Song.create(title: "Ascension")

PlaylistAdd.destroy_all

PlaylistAdd1 = PlaylistAdd.create(playlist_id: Playlist1.id, song_id: Song1.id)
PlaylistAdd2 = PlaylistAdd.create(playlist_id: Playlist1.id, song_id: Song2.id)
PlaylistAdd3 = PlaylistAdd.create(playlist_id: Playlist2.id, song_id: Song3.id)
PlaylistAdd4 = PlaylistAdd.create(playlist_id: Playlist2.id, song_id: Song4.id)
