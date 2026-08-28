import  { writeFile, readFile} from "node:fs/promises"
import { PokemonResumo } from "../models/Pokemon.js"

export async function lerCatalogo(): Promise<PokemonResumo[]> {
  const conteudo = await readFile("pc_box.json", "utf-8");
  const pokemons = JSON.parse(conteudo)
  return pokemons
}

export async function salvarCatalogo(pokemons: PokemonResumo[]): Promise<void> {
    const conteudo = JSON.stringify(pokemons);
    await writeFile("pc_box.json", conteudo)
}