class Removestatus < ActiveRecord::Migration
  def change
    remove_column :songs, :status
  end
end
