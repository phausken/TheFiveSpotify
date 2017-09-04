class CreatePlaylistFollows < ActiveRecord::Migration
  def change
    create_table :playlist_follows do |t|
      t.integer :user_id, null: false
      t.integer :playlist_id, null: false
      t.timestamps null: false
    end
  end
end
