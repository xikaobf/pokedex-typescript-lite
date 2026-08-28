# Pokdex TypeScript Lite

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

[OK] pikachu adicionado ao catálogo.
[OK] charmander adicionado ao catálogo.


### Duplicidade

Entrada testada: adicionar pikachu uma segunda vez

Saída obtida:

Pokemon ja cadastrado


### Busca inválida

Entrada testada: nome inexistente

Saída obtida:

Pokemon não encontrado.


### Listagem do catálogo

Saída obtida:

#25 - pikachu | tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | tipos: fire | Altura: 6 | Peso: 85


### Remoção

Entrada testada: remover ID 25

Saída obtida:

[OK] Pokemon removido do catálogo.


Listagem após a remoção:

#4 - charmander | tipos: fire | Altura: 6 | Peso: 85


## Conceitos aplicados

### TypeScript


### Interface PokemonResumo


### Fetch e async/await


### Tratamento de erros


### Métodos de array


### Classe CatalogoPokemon


## Organização do Kanban



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