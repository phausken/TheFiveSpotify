class DropArtistCredits < ActiveRecord::Migration
  def change
    drop_table :artist_credits
    add_column :songs, :artist_id, :integer, null: false
  end
end
