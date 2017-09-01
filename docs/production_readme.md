#The Five Spotify#

[The Five Spotify live](https://thefivespotify.herokuapp.com)

The Five Spotify is a full-stack music web application. Based off Open Spotify, it uses Ruby on Rails for its back-end, a PostgreSQL database, and React.js in the front-end, using Redux as an architectural framework.

##Features and Implementation##

###Songs and Playlists###

Songs and playlists are stored on separate tables in the database. The song table contains columns for `id`, `title`, and `artist_id` table. The playlist table has columns for `id`, `name`, and `user_id`. A join table is used to link songs to playlists.

Once a user has logged in, they are redirected to the playlist index page, which makes an API call to the database for any playlist created by the user. New playlists are created through a modal form component, rendered by clicking a button in the top nav-bar.

Songs are rendered by a single `SongComponent`, which in turn are rendered in the `SongIndex` component and the `PlaylistShow` component. The `SongComponent` displays default information (title, artist name), and a link to either add or remove a song from a playlist, depending on its location. Songs are added to playlists through a separate modal form.

All `SongComponents` have a `doubleClick` event listener, which dispatches a corresponding `pauseTrack()` or `playTrack()` depending on whether the track is currently being played.

###Music Player###

The `MusicPlayer` component makes use of an HTML audio tag, using React's `ref` functionality to directly interact with the DOM element. Upon an initial load, the audio's `src` is not set. The current track is kept in the UI slice of state, along with whether a track is playing or paused, and a first-in/first-out queue of remaining songs on a playlist. The current song object is passed down to the `MusicPlayer` component using the `getCurrentTrack` selector. Upon update, the `MusicPlayer` updates its `src` and calls `play()` on itself to play the song it just received.

When a track finishes playing, the component fires the `handleNext()` method, which updates the state's current track to the next song in the queue, triggering a new song. The audio tag is also connected to some custom controls: a pause/play button, which fires either `pauseTrack()` or `playTrack()`, a volume slider, and a progress bar that updates itself based on the song's `currentTime` relative to its `duration`.

##Future Directions for the Project##

###Search and Playlist Following###

Search is an integral part of Spotify. I intend to use the PG_Search library to build a search component that will go through the names of songs, playlists, and artists. I also intend to let users search for and follow other users' playlists.

###Additional Music Player Functionality###

In addition to the current music player functionality, I would like to add the ability to skip songs, play the previous song in a playlist, loop a song, and advance to any point in a song using the progress bar.
