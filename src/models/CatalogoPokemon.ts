import { formatarPokemon } from "../utils/textFormatters.js";
import { PokemonResumo } from "./Pokemon.js"


export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = []
    



adicionar(pokemon: PokemonResumo){
    if(this.pokemons.some((p) => p.id === pokemon.id)){
        console.log("Pokemon ja cadastrado");
        return null
    }
    this.pokemons.push(pokemon);
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

remover(id: number) {
    if (!this.pokemons.some((p) => p.id === id)) {
        console.log(`[AVISO] Nenhum Pokemon encontrado com esse ID.`);
        return null;
    }
    this.pokemons = this.pokemons.filter((p) => p.id !== id);
    console.log(`[OK] Pokemon removido do catálogo.`);
}
}