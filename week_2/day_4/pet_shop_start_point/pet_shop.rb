require_relative('pet')

class PetShop

  def initialize (input_pets)
    @pets = input_pets
  end

  def pet_type(name)
    pet = @pets.find { |pet| pet.name == name }
    return pet.type
  end

  def get_names_of_all_pets_of_type(search_type)
    pets_of_type = @pets.select { |pet| pet.type == search_type }
    names_of_all_pets_of_type = pets_of_type.map { |pet| pet.name }
    return names_of_all_pets_of_type
  end

  def get_number_of_pets_costing_at_least(search_cost)
    pets_of_cost = @pets.select { |pet| pet.price >= search_cost }
    return pets_of_cost.count
  end

end