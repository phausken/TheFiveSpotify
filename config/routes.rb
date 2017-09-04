Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :new]
    resources :playlists
    resources :songs, only: [:index, :show]
    resources :playlist_adds, only: [:create, :destroy]
    resources :search, only: [:index]
    resources :playlist_follows, only: [:create, :destroy]
  end
end
