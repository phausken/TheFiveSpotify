# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

User1 = User.create(username: "phausken", password: "password")
User2 = User.create(username: "kenneth_ng", password: "password")
User3 = User.create(username: "Guest", password: "password")
User4 = User.create(username: "nchapman1", password: "password")

Playlist.destroy_all

Playlist1 = Playlist.create(name: "50s Jazz", image_url: 'img1', user_id: User1.id)
Playlist2 = Playlist.create(name: "60s Jazz", image_url: 'img1', user_id: User2.id)
Playlist3 = Playlist.create(name: "5 Second Songs!", image_url: 'img1', user_id: User3.id)
Playlist4 = Playlist.create(name: "Bebop", image_url: 'img1', user_id: User3.id)
Playlist5= Playlist.create(name: "Guitar", image_url: 'img1', user_id: User3.id)
Playlist6 = Playlist.create(name: "Ballads", image_url: 'img1', user_id: User3.id)
Playlist7 = Playlist.create(name: "Piano Trios", image_url: 'img1', user_id: User1.id)
Playlist8 = Playlist.create(name: "Free Jazz", image_url: 'img1', user_id: User1.id)
Playlist9 = Playlist.create(name: "Roma", image_url: 'img1', user_id: User1.id)
Playlist10 = Playlist.create(name: "Fusion", image_url: 'img1', user_id: User1.id)
Playlist11 = Playlist.create(name: "New Releases", image_url: 'img1', user_id: User1.id)
Playlist12 = Playlist.create(name: "Blues", image_url: 'img2', user_id: User1.id)
Playlist13 = Playlist.create(name: "Standards", image_url: 'img3', user_id: User1.id)

Artist.destroy_all

Artist1 = Artist.create(name: "Ornette Coleman", image_url: 'img2')
Artist2 = Artist.create(name: "Bill Evans", image_url: 'img2')
Artist3 = Artist.create(name: "Hank Mobley", image_url: 'img3')
Artist4 = Artist.create(name: "Bud Powell", image_url: 'img3')
Artist5 = Artist.create(name: "Fats Navarro", image_url: 'img3')
Artist6 = Artist.create(name: "Miles Davis", image_url: 'img3')
Artist7 = Artist.create(name: "Jaco Pastorius", image_url: 'img3')
Artist8 = Artist.create(name: "Duke Ellington", image_url: 'img3')
Artist9 = Artist.create(name: "Art Tatum", image_url: 'img3')
Artist10 = Artist.create(name: "Herbie Nichols", image_url: 'img3')
Artist11 = Artist.create(name: "Kenny Burrell", image_url: 'img3')
Artist12 = Artist.create(name: "Sonny Rollins", image_url: 'img3')
Artist13 = Artist.create(name: "Clifford Brown", image_url: 'img2')
Artist14 = Artist.create(name: "Ben Webster", image_url: 'img2')
Artist15 = Artist.create(name: "Horace Silver", image_url: 'img3')
Artist16 = Artist.create(name: "Thelonious Monk", image_url: 'img3')
Artist17 = Artist.create(name: "George Benson", image_url: 'img3')
Artist18 = Artist.create(name: "Billie Holiday", image_url: 'img3')
Artist19 = Artist.create(name: "Charlie Christian", image_url: 'img3')
Artist20= Artist.create(name: "Charlie Parker", image_url: 'img3')
Artist21 = Artist.create(name: "Various Artists", image_url: 'img1')

Song.destroy_all

Song1 = Song.create(title: "Lonely Woman", artist_id: Artist1.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/01+Lonely+Woman.mp3')
Song2 = Song.create(title: "My Foolish Heart", artist_id: Artist2.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/01+My+Foolish+Heart.mp3')
Song3 = Song.create(title: "Remember", artist_id: Artist3.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/01+Remember.mp3')
Song4 = Song.create(title: "Tempus Fugit", artist_id: Artist4.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/01+Tempus+Fugit.mp3')
Song5 = Song.create(title: "The Chase", artist_id: Artist5.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/01+The+chase+(alternate+take).mp3')
Song6 = Song.create(title: "Bess, You Is My Woman Now", artist_id: Artist6.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/02+Bess%2C+You+Is+My+Woman+Now.mp3')
Song7 = Song.create(title: "Come On, Come Over", artist_id: Artist7.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/02+Come+On%2C+Come+Over.mp3')
Song8 = Song.create(title: "Isfahan", artist_id: Artist8.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/03+Isfahan.mp3')
Song9 = Song.create(title: "Tiger Rag", artist_id: Artist9.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/03+Tiger+Rag.mp3')
Song10 = Song.create(title: "Love, Gloom, Cash, Love", artist_id: Artist10.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/04+Love%2C+Gloom%2C+Cash%2C+Love.mp3')
Song11 = Song.create(title: "Midnight Blue", artist_id: Artist11.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/04+Midnight+Blue.mp3')
Song12 = Song.create(title: "The Bridge", artist_id: Artist12.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/04+The+Bridge.mp3')
Song13 = Song.create(title: "Donna Lee", artist_id: Artist13.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/05+Donna+Lee.mp3')
Song15 = Song.create(title: "The Kicker", artist_id: Artist15.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/05+The+Kicker.mp3')
Song16 = Song.create(title: "Evonce", artist_id: Artist16.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/1-03+Evonce.mp3')
Song18 = Song.create(title: "The Man I Love", artist_id: Artist18.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/10+The+Man+I+Love.mp3')
Song19 = Song.create(title: "Solo Flight", artist_id: Artist19.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/13+Solo+Flight.mp3')
Song20 = Song.create(title: "Confirmation", artist_id: Artist20.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/2-11+Confirmation.mp3')
Song21 = Song.create(title: "First 5 Second Song", artist_id: Artist21.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/Kitschstortion_Algadaeneun.mp3' )
Song22 = Song.create(title: "Second 5 Second Song", artist_id: Artist21.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/artificialcuttlefish_theoretical_strings_waltz.mp3' )
Song23 = Song.create(title: "Billies Bounce", artist_id: Artist20.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/Billies+Bounce.mp3' )
Song24 = Song.create(title: "In the Wee Small Hours", artist_id: Artist14.id, url: 'https://s3.us-east-2.amazonaws.com/thefivespotify/05+In+the+Wee+Small+Hours+of+the.mp3')

PlaylistAdd.destroy_all

PlaylistAdd1 = PlaylistAdd.create(playlist_id: Playlist3.id, song_id: Song21.id)
PlaylistAdd2 = PlaylistAdd.create(playlist_id: Playlist3.id, song_id: Song22.id)
PlaylistAdd3 = PlaylistAdd.create(playlist_id: Playlist4.id, song_id: Song23.id)
PlaylistAdd4 = PlaylistAdd.create(playlist_id: Playlist4.id, song_id: Song13.id)
PlaylistAdd5 = PlaylistAdd.create(playlist_id: Playlist4.id, song_id: Song15.id)
PlaylistAdd6 = PlaylistAdd.create(playlist_id: Playlist4.id, song_id: Song4.id)
PlaylistAdd7 = PlaylistAdd.create(playlist_id: Playlist5.id, song_id: Song19.id)
PlaylistAdd8 = PlaylistAdd.create(playlist_id: Playlist5.id, song_id: Song11.id)
PlaylistAdd9 = PlaylistAdd.create(playlist_id: Playlist6.id, song_id: Song18.id)
PlaylistAdd10 = PlaylistAdd.create(playlist_id: Playlist6.id, song_id: Song8.id)
PlaylistAdd11 = PlaylistAdd.create(playlist_id: Playlist6.id, song_id: Song24.id)
PlaylistAdd12 = PlaylistAdd.create(playlist_id: Playlist6.id, song_id: Song2.id)
PlaylistAdd13 = PlaylistAdd.create(playlist_id: Playlist13.id, song_id: Song2.id)
PlaylistAdd14 = PlaylistAdd.create(playlist_id: Playlist13.id, song_id: Song18.id)
PlaylistAdd15 = PlaylistAdd.create(playlist_id: Playlist13.id, song_id: Song24.id)


PlaylistFollow.destroy_all

PlaylistFollow1 = PlaylistFollow.create(playlist_id: Playlist2.id, user_id: User1.id)
PlaylistFollow2 = PlaylistFollow.create(playlist_id: Playlist13.id, user_id: User3.id)
