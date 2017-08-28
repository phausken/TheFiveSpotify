class Api::PlaylistAddsController < ApplicationController

  def create
  end



private
def playlist_add_params
  params.require(:playlist_add).permit(:song_id, :playlist_id)
end
end
