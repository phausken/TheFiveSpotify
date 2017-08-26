class CreateArtist < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.string :name, null: false
      t.string :image_url, null: false
      t.timestamps
    end
  end
end
