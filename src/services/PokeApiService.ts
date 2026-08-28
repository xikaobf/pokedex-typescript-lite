
import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon.js";




export async function buscarPokemon(nomeOuId: string | number): Promise<PokemonResumo | null> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;
    try{
        const resposta = await fetch(url)
        if(!resposta.ok){
            console.log("Pokemon não encontrado.")
            return null
        }
        const dados: PokemonApiResponse = await resposta.json();
        const tipos = dados.types.map((item) => item.type.name)

        return {
            id: dados.id,
            nome: dados.name,
            tipos: tipos,
            altura: dados.height,
            peso: dados.weight,
        }
    }
    catch(error){
    console.log("Não foi possível buscar o Pokemon.")
    return null
}
}

