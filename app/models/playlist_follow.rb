class PlaylistFollow < ActiveRecord::Base
validates :user_id, :playlist_id, presence: true

belongs_to :playlist
belongs_to :user

end
