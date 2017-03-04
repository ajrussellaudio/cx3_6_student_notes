public class PokemonFactory {
  public Pokemon getPokemon(String pokedexNumber) {
    if(pokedexNumber == null){
      return null;
    }
    if(pokedexNumber == "001"){
      return new Bulbasaur();
    }
    if(pokedexNumber == "004"){
      return new Charmander();
    }
    if(pokedexNumber == "007"){
      return new Squirtle();
    }
    return null; // if pokedexNumber is anything else!
  }
}