class Api::PlaylistAddsController < ApplicationController

  def create
    @playlist_add = PlaylistAdd.new(playlist_add_params)
    @playlist = @playlist_add.playlist
    if @playlist_add.save
      render "api/playlists/show"
    else
      render json: @playlist_add.errors.full_messages
    end
  end

  def destroy
    @playlist_add = PlaylistAdd.find_by(playlist_add_params)
    @playlist = @playlist_add.playlist
    if @playlist_add
      @playlist_add.destroy
      render "/api/playlists/show"
    else
      render json: @playlist_add.errors.full_messages
    end
  end


private
def playlist_add_params
  params.require(:playlistAdd).permit(:song_id, :playlist_id)
end
end
