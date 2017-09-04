class Api::PlaylistFollowsController < ApplicationController
  def create
    @playlist_follow = PlaylistFollow.new(playlist_follow_params)
    if @playlist_follow.save
      render '/api/playlists/show'
    else
      render json: @playlist_follow.errors.full_messages
    end
  end

  def destroy
    @playlist_follow = PlaylistFollow.find_by(playlist_follow_params)
    if @playlist_follow
      @playlist_follow.destroy
      render '/api/playlists/show'
    else
      render json: @playlist_follows.errors.full_messages
    end
  end

private
def playlist_follow_params
  params.require(:playlistfollow).permit(:user_id, :playlist_id)
end

end
