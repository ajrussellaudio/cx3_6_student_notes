class CreateCactus < ActiveRecord::Migration
  def change
    create_table :cactus do |t|
      t.integer :size

      t.timestamps null: false
    end
  end
end
