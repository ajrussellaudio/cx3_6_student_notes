class AddLightSaberToAnimal < ActiveRecord::Migration
  def change
    add_column :animals, :lightsaber, :string
  end
end
