class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :url
      t.belongs_to :favorites_repo
      t.timestamps
    end
  end
end
