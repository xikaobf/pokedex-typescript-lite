import { buscarPokemon } from "../services/PokeApiService.js";
import { CatalogoPokemon } from "../models/CatalogoPokemon.js";
import { lerCatalogo } from "../services/BoxService.js";

export async function executar(): Promise<void>{

    const pokemonsSalvos = await lerCatalogo();
    const catalogo = new CatalogoPokemon(pokemonsSalvos)

const pikachu = await buscarPokemon("pikachu")
if(pikachu !== null){
   await catalogo.adicionar(pikachu)   
}
const charmander = await buscarPokemon("charmander")
if(charmander !== null){
   await catalogo.adicionar(charmander)
}
const pikachu2 = await buscarPokemon("pikachu")
if(pikachu2 !== null){
   await catalogo.adicionar(pikachu2)   
}
await buscarPokemon("alalal")

catalogo.listar();
await catalogo.remover(25);
catalogo.listar();
}