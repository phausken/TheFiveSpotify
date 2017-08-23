class Api::PlaylistsController < ApplicationController

  def new
  end

  def create
    @playlist = Playlist.create(playlist_params)
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

  def edit
    @playlist = Playlist.find_by(playlist_params)
    if @playlist.update
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def index
    @playlist = Playlist.all
  end

  def destroy
    @playlist = Playlist.find_by(playlist_params)
    if @playlist
      @playlist.delete
      render :new
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

private
def playlist_params
  params.require(:playlist).permit(:name)
end
end
