class PlaylistAdd < ActiveRecord::Base
  validates :playlist_id, :song_id, presence: true

  belongs_to :playlist
  belongs_to :song
end
