class AddImagetoPlaylist < ActiveRecord::Migration
  def change
    change_table :playlists do |t|
      t.string :image_url, null: false
      t.integer :user_id, null: false
    end
  end
end
