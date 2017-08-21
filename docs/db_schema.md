#Scheme Information

## Users
column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
username | string | not null, unique, indexed
password_digest | string | not null
session_token | string | not null, unique, indexed

##Artists
column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
name | string | not null, indexed


##Songs
column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
name | string | not null, indexed

#SongCredits
column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
artist_id | integer | not null, foreign key, indexed
song_id | integer | not null, foreign key, indexed
main_artist | boolean | not null


##Playlists
column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
name | string | not null, indexed


#PlaylistAdds
column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
playlist_id | integer | not null, foreign key, indexed
song_id | integer | not null, foreign key, indexed


#PlaylistFollows
column name | data type | details
------------|-----------|--------
id | integer | not null, primary key
playlist_id | integer | not null, foreign key, indexed
user_id | integer | not null, foreign key, indexed
