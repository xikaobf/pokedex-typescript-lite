import { buscarPokemon } from "../services/PokeApiService.js";
import { CatalogoPokemon } from "../models/CatalogoPokemon.js";
import { lerCatalogo } from "../services/BoxService.js";
import { createInterface } from "node:readline/promises";

export async function executar(): Promise<void>{
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    
    const pokemonsSalvos = await lerCatalogo();
    const catalogo = new CatalogoPokemon(pokemonsSalvos)

    while(true){
        console.log("1 - Buscar e adicionar Pokemon");
        console.log("2 - Listar catalogo");
        console.log("3 - Remover Pokemon");
        console.log("4 - Sair");
        const opcao = await rl.question("Escolha uma opcao: ");
        if(opcao === "4"){
            rl.close();
            break
        }
        else if(opcao === "2"){
            catalogo.listar();
        }
        else if (opcao === "1"){
            const opcao1 = await rl.question("Digite o ID ou nome do Pokemon: ")
            const pokemonEncontrado = await buscarPokemon(opcao1)
            if(pokemonEncontrado != null){
                await catalogo.adicionar(pokemonEncontrado)
            }
        }
        else if(opcao === "3"){
            const opcao3 = await rl.question("Digite o ID do pokemon: ")
            const idNumero = Number(opcao3)
            await catalogo.remover(idNumero)
        }
    }
}


