class RemoveLightSaberFromAnimal < ActiveRecord::Migration
  def change
    remove_column :animals, :lightsaber
  end
end
