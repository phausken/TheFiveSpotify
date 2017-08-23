class Song < ActiveRecord::Base
  validates :title, presence: true

  has_many: :playlist_adds,
    primary_key: :id,
    foreign_key: :song_id,
    through: :playlist_adds

    
end
