class AddUrLandStatustoSongs < ActiveRecord::Migration
  def change
    add_column :songs, :url, :string
    add_column :songs, :status, :string
  end
end
