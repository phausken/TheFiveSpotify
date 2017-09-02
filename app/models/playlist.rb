class Playlist < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:name]

  validates :name, :user, presence: true

  belongs_to :user

  has_many :playlist_adds

  has_many :songs,
    through: :playlist_adds,
    source: :song

end
