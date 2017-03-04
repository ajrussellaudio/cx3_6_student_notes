require "pg"
require_relative "../db/sql_runner"

class OwnedPokemon

  def self.all()
    sql = "SELECT * FROM ownedpokemons;"
    owned_pokemons = SqlRunner.run(sql)
    result = owned_pokemons.map { |owned_pokemon| OwnedPokemon.new(owned_pokemon) }
    return result
  end

  def self.delete_all()
    sql = "DELETE FROM ownedpokemons;"
    SqlRunner.run(sql)
  end

  def initialize( options )
    @trainer_id = options["trainer_id"].to_i
    @pokemon_id = options["pokemon_id"].to_i
    @id = options["id"].to_i
  end

  def save()
    sql = "INSERT INTO ownedpokemons (trainer_id, pokemon_id) VALUES (#{@trainer_id}, #{@pokemon_id}) RETURNING * ;"
    owned_pokemon = SqlRunner.run( sql ).first
    @id = owned_pokemon['id'].to_i
  end



end