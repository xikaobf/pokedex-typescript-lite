import { PokemonResumo } from "./Pokemon.js"


class CatalogoPokemon {
    private pokemons: PokemonResumo[] = []
    



adicionar(pokemon: PokemonResumo){
    if(this.pokemons.some((p) => p.id === pokemon.id)){
        console.log("Pokemon ja cadastrado");
        return null
    }
    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`)


};
listar(){};
remover(){}
}