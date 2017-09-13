class Playlist < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:name]


  validates :name, :user, presence: true

  belongs_to :user

  has_many :playlist_adds

  has_many :songs,
    through: :playlist_adds,
    source: :song

  has_many :playlist_follows

  has_many :followers,
    through: :playlist_follows,
    source: :user

end
