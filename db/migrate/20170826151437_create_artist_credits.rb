class CreateArtistCredits < ActiveRecord::Migration
  def change
    create_table :artist_credits do |t|
      t.integer :artist_id, null: false
      t.integer :song_id, null: false
      t.boolean :main_artist, null: false
      t.timestamps null: false
    end

    add_index :artist_credits, :artist_id
    add_index :artist_credits, [:artist_id, :song_id], unique: true
    add_index :artist_credits, :main_artist
  end
end
