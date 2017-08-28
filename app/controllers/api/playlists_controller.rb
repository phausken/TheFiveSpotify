class Api::PlaylistsController < ApplicationController

  def new
  end

  def create
    @playlist = Playlist.create(playlist_params)
    @playlist.user = current_user
    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist
      @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    @playlists = Playlist.all
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    if @playlist
      @playlist.delete
      render json: "{}"
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

private
def playlist_params
  params.require(:playlist).permit(:name)
end
end
