public class PokemonFactoryDemo {
  public static void main(String[] args){
    PokemonFactory pokemonFactory = new PokemonFactory();

    Pokemon charmander = pokemonFactory.getPokemon("004");
    charmander.attack();
    // -> "Inferno"

    Pokemon bulbasaur = pokemonFactory.getPokemon("001");
    bulbasaur.attack();
  }
}