class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
  end

private
def song_params
  params.require(:song).permit(:status)
end
end
