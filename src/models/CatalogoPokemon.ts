import { formatarPokemon } from "../utils/textFormatters.js";
import { PokemonResumo } from "./Pokemon.js"
import { salvarCatalogo } from "../services/BoxService.js";

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = []

    constructor(pokemonsIniciais: PokemonResumo[] = []) {
  this.pokemons = pokemonsIniciais;
}
    

async adicionar(pokemon: PokemonResumo){
    if(this.pokemons.some((p) => p.id === pokemon.id)){
        console.log("Pokemon ja cadastrado");
        return null
    }
    this.pokemons.push(pokemon);
    await salvarCatalogo(this.pokemons);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`)


};
listar() {
    if (this.pokemons.length === 0) {
        console.log(`[AVISO] Catálogo vazio.`);
        return null;
    }
    this.pokemons.forEach((p) => {
        console.log(formatarPokemon(p));
    });
};

async remover(id: number) {
    if (!this.pokemons.some((p) => p.id === id)) {
        console.log(`[AVISO] Nenhum Pokemon encontrado com esse ID.`);
        return null;
    }
    this.pokemons = this.pokemons.filter((p) => p.id !== id);
    await salvarCatalogo(this.pokemons);
    console.log(`[OK] Pokemon removido do catálogo.`);
}
}