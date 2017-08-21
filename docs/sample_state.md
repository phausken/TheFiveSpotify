```javascript
{
currentUser: {
    id: 1,
    username: "peter_hausken"
users {
  1 : { id: 1,
  username: string,
  playlists: [array of playlist ids]}
  followed_users: [array of user ids]}
  followed_playlists: [array of playlist ids]}
  }

artists {
  1 : {id: 1,
  name: string,
  image_url: string,
  songs: [array of song ids]}
  }

songs {
  1 : {id: 1,
  title: string,
  image_url: string,
  artist_id: integer
  sidemen: [array of artist ids]
  }

playlists {
  1: {id: 1,
  title: string,
  image_url: string,
  user_id: integer,
  song_ids: [array of song ids]
  }
}
```
