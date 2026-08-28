import { PokemonResumo } from "../models/Pokemon.js";

export function formatarPokemon(pokemon: PokemonResumo): string{
        return `#${pokemon.id} - ${pokemon.nome} | tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
}