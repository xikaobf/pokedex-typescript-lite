import { buscarPokemon } from "../services/PokeApiService.js";
import { CatalogoPokemon } from "../models/CatalogoPokemon.js";

export async function executar(): Promise<void>{
    
    const catalogo = new CatalogoPokemon()

const pikachu = await buscarPokemon("pikachu")
if(pikachu !== null){
    catalogo.adicionar(pikachu)   
}
const charmander = await buscarPokemon("charmander")
if(charmander !== null){
    catalogo.adicionar(charmander)
}
const pikachu2 = await buscarPokemon("pikachu")
if(pikachu2 !== null){
    catalogo.adicionar(pikachu2)   
}
await buscarPokemon("alalal")

catalogo.listar();
catalogo.remover(25);
catalogo.listar();
}