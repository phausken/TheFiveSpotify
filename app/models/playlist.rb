class Playlist < ActiveRecord::Base
  validates :name, presence: true

  has_many :playlist_adds,
    through: :PlaylistAdd,
    primary_key: :id,
    foreign_key: :playlist_id

  has_many :songs
    through: :playlist_adds,
    source: :Songs

end
