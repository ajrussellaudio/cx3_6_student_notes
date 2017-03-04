require( 'pg' )
require_relative('../db/sql_runner')

class Trainer

  attr_reader( :id, :name )

  def self.all()
    sql = "SELECT * FROM trainers"
    trainers = SqlRunner.run( sql )
    result = trainers.map { |trainer| Trainer.new( trainer ) }
    return result
  end

  def self.delete_all()
    sql = "DELETE FROM trainers"
    SqlRunner.run(sql)
  end

  def initialize( options )
    @id = options['id'].to_i
    @name = options['name']
  end

  def save()
    sql = "INSERT INTO trainers (name) VALUES ('#{ @name }') RETURNING *"
    trainer = SqlRunner.run( sql ).first
    @id = trainer['id'].to_i
  end

  def pokemons()
    # sql = "SELECT pokemons.* FROM pokemons INNER JOIN ownedpokemons ON ownedpokemons.pokemon_id = pokemons.id WHERE trainer_id = #{@id};" # unaliased
    sql = "SELECT p.* FROM pokemons p INNER JOIN ownedpokemons op ON op.pokemon_id = p.id WHERE trainer_id = #{@id};" # aliased
    pokemons = SqlRunner.run(sql)
    return pokemons.map { |pokemon| Pokemon.new(pokemon) }
  end

end