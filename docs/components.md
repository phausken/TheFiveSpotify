#Components Hierarchy

###Auth Form Container
* Auth Form

###Home Container
* Sidebar
* Navbar
* Continuous Play
* PlaylistIndex
* SongIndex
* ArtistIndex

###Playlist Container
* PlaylistSongs

###Search
* PlaylistResults
* SongResults
* ArtistResults

###New Playlist

###User
* UserPlaylists


##Routes

Path | Component
-----|----------
/sign-up | "Auth Form Container"
/sign-in | "Auth Form Container"
/home | "Home Container"
/home/playlists | "PlaylistIndex"
/home/artists | "AristIndex"
/home/songs/ | "SongIndex"
/home/playlists/:id | "PlaylistSongs"
/search | "Search"
/user/:id | "UserPlayLists"
