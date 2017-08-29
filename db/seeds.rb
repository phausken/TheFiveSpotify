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
Playlist3 = Playlist.create(name: "Ballads", image_url: 'img1', user_id: User1.id)
Playlist4 = Playlist.create(name: "Bebop", image_url: 'img1', user_id: User1.id)
Playlist5= Playlist.create(name: "Up-Tempo", image_url: 'img1', user_id: User1.id)
Playlist6 = Playlist.create(name: "Standards", image_url: 'img1', user_id: User1.id)
Playlist7 = Playlist.create(name: "Piano Trios", image_url: 'img1', user_id: User1.id)
Playlist8 = Playlist.create(name: "Free Jazz", image_url: 'img1', user_id: User1.id)
Playlist9 = Playlist.create(name: "Roma", image_url: 'img1', user_id: User1.id)
Playlist10 = Playlist.create(name: "Fusion", image_url: 'img1', user_id: User1.id)
Playlist11 = Playlist.create(name: "New Releases", image_url: 'img1', user_id: User1.id)
Playlist12 = Playlist.create(name: "Blues", image_url: 'img2', user_id: User1.id)


Artist.destroy_all

Artist1 = Artist.create(name: "Miles Davis", image_url: 'img2')
Artist2 = Artist.create(name: "John Coltrane", image_url: 'img2')
Artist3 = Artist.create(name: "Charlie Parker", image_url: 'img3')

Song.destroy_all

Song1 = Song.create(title: "So What", artist_id: Artist1.id, url: "url1", status: "")
Song2 = Song.create(title: "Moments Notice", artist_id: Artist2.id, url: "url1", status: "")
Song3 = Song.create(title: "Freedom Jazz Dance", artist_id: Artist1.id, url: "url1", status: "")
Song4 = Song.create(title: "Ascension", artist_id: Artist2.id, url: "url1", status: "")

PlaylistAdd.destroy_all

PlaylistAdd1 = PlaylistAdd.create(playlist_id: Playlist1.id, song_id: Song1.id)
PlaylistAdd2 = PlaylistAdd.create(playlist_id: Playlist1.id, song_id: Song2.id)
PlaylistAdd3 = PlaylistAdd.create(playlist_id: Playlist2.id, song_id: Song3.id)
PlaylistAdd4 = PlaylistAdd.create(playlist_id: Playlist2.id, song_id: Song4.id)
