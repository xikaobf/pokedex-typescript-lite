# Pokedex TypeScript Lite

## Sobre o projeto

O Pokedex TypeScript Lite é uma aplicação simples em Node.js com TypeScript que consulta dados de Pokemon na PokeAPI e organiza alguns resultados em um catálogo local durante a execução do programa.

## Objetivo

Praticar os principais conceitos do Módulo 01: Node.js, TypeScript, interfaces, funções tipadas, arrays, objetos, JSON, métodos de array, classes, async/await, fetch, tratamento de erros, GitHub e GitFlow.

## Tecnologias utilizadas

- Node.js
- TypeScript
- tsx
- PokeAPI
- Git e GitHub

## Pré-requisitos

- Node.js instalado
- npm
- Git

## Como instalar

```bash
git clone https://github.com/xikaobf/pokedex-typescript-lite.git
cd pokedex-typescript-lite
npm install
```

## Como executar

```bash
npm run dev
```

## Estrutura do projeto

```
pokedex-typescript-lite/
├── src/
│ ├── main.ts
│ ├── controllers/
│ │ └── TerminalController.ts
│ ├── services/
│ │ ├── PokeApiService.ts
│ │ └── BoxService.ts
│ ├── models/
│ │ ├── Pokemon.ts
│ │ └── CatalogoPokemon.ts
│ └── utils/
│ └── textFormatters.ts
├── pc_box.json
├── package.json
├── tsconfig.json
└── README.md
```


## Funcionalidades

- Buscar Pokemon por nome ou ID na PokeAPI
- Tratar erro de Pokemon inexistente
- Transformar resposta da API em objeto simplificado
- Adicionar Pokemon ao catálogo local (em memória)
- Impedir Pokemon duplicado no catálogo
- Listar catálogo
- Remover Pokemon do catálogo por ID
- Exibir mensagens claras no terminal

## Exemplos de execução

### Busca válida e adição ao catálogo

Saída obtida:
```
[OK] pikachu adicionado ao catálogo.
[OK] charmander adicionado ao catálogo.
```

### Duplicidade

Entrada testada: adicionar pikachu uma segunda vez

Saída obtida:
```
Pokemon ja cadastrado
```

### Busca inválida

Entrada testada: nome inexistente

Saída obtida:
```
Pokemon não encontrado.
```

### Listagem do catálogo

Saída obtida:
```
#25 - pikachu | tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | tipos: fire | Altura: 6 | Peso: 85
```

### Remoção

Entrada testada: remover ID 25

Saída obtida:
```
[OK] Pokemon removido do catálogo.
```

Listagem após a remoção:
```
#4 - charmander | tipos: fire | Altura: 6 | Peso: 85
```

## Conceitos aplicados

### TypeScript
No arquivo Pokemon.ts, usei interfaces (PokemonResumo e PokemonApiResponse) para definir quais dados cada objeto deveria ter e o tipo de cada um (number, string, array, etc). Também usei parâmetros e retornos tipados nas funções, como em buscarPokemon, que recebe string | number e retorna Promise<PokemonResumo | null>.

### Interface PokemonResumo
A interface PokemonApiResponse representa o formato bruto que a PokeAPI devolve, com todos os campos originais (em inglês, estrutura aninhada). Já a PokemonResumo é o formato simplificado que uso no catálogo — só com os dados que realmente importam pro projeto (id, nome, tipos, altura, peso), em português e mais fácil de trabalhar. A função buscarPokemon faz essa transformação de uma pra outra.

### Fetch e async/await
A função buscarPokemon usa fetch para enviar uma requisição HTTP para a PokeAPI. Como essa resposta não chega instantaneamente (é uma operação de rede, que leva um tempo), a função precisa ser async, e usamos await para "pausar" a execução até a resposta chegar. Sem isso, o código continuaria rodando antes da resposta estar pronta, e tentaria usar dados que ainda não existem.

### Tratamento de erros
Dentro do `try`, depois de receber a resposta do `fetch`, verifico se `resposta.ok` é falso. Essa propriedade já vem `false` automaticamente para qualquer erro HTTP (incluindo o 404 quando o Pokemon não existe), então não preciso checar o número do status manualmente. Já o `catch` trata falhas mais graves, como problemas de conexão, onde a requisição nem chega a completar. Assim, o programa nunca quebra, sempre retorna `null` de forma controlada.

### Métodos de array
- **`.map()`**: usado dentro de `buscarPokemon`, para transformar o array de tipos vindo da API (`dados.types`, que é um array de objetos aninhados) em um array simples de strings com os nomes dos tipos.
- **`.some()`**: usado nos métodos `adicionar` e `remover` do `CatalogoPokemon`. Percorre o array e verifica se já existe (ou não existe) um Pokemon com determinado `id`, usado para bloquear duplicidade e para confirmar que o Pokemon existe antes de remover.
- **`.forEach()`**: usado no método `listar`, para percorrer todos os Pokemon do catálogo e exibir uma linha formatada no terminal para cada um.
- **`.filter()`**: usado no método `remover`, para criar um novo array contendo todos os Pokemon exceto aquele com o `id` informado, efetivamente removendo-o do catálogo.

### Classe CatalogoPokemon
A classe tem um atributo privado `pokemons` (um array de `PokemonResumo`), que armazena os Pokémon cadastrados durante a execução do programa. Ela tem três métodos públicos: `adicionar` (insere um Pokémon novo, bloqueando duplicados pelo `id`), `listar` (exibe todos os Pokémon cadastrados) e `remover` (remove um Pokémon pelo `id`). O array é `private` porque ninguém de fora da classe deve poder alterar a lista diretamente (por exemplo, adicionando ou removendo itens sem passar pelas regras dos métodos, como a checagem de duplicidade), só é possível interagir com o catálogo através dos métodos que a própria classe oferece. Isso é o conceito de encapsulamento.

## Organização do Kanban
Link do Kanban: https://github.com/users/xikaobf/projects/1


## Branches utilizadas

- main
- develop
- feat/pokedex
- docs/readme

## Melhorias futuras

- Persistir o catálogo em pc_box.json
- Criar menu interativo no terminal
- Exibir HP, Ataque e Defesa
- Criar filtros por tipo de Pokemon