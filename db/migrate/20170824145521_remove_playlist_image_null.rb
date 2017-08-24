class RemovePlaylistImageNull < ActiveRecord::Migration
  def change
    change_column :playlists, :image_url, :string, null: true
  end
end
