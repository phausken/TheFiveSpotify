class CreatePlaylistAdds < ActiveRecord::Migration
  def change
    create_table :playlist_adds do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false
      t.timestamps null: false
    end

    add_index :playlist_adds, :playlist_id
    add_index :playlist_adds, :song_id
  end
end
