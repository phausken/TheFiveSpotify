class Playlist < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :user

  has_many :playlist_adds

  has_many :songs,
    through: :playlist_adds,
    source: :song

end
