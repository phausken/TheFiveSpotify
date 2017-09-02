class Song < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:title]

  validates :title, presence: true

  has_many :playlist_adds,
    primary_key: :id,
    foreign_key: :song_id,
    through: :playlist_adds

  belongs_to :artist
end
