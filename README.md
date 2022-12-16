<h1 align="center">Controle financeiro</h1>

<p align="center">

<img src="https://img.shields.io/badge/typescript-%5E4.6.4-green" >

<img src="https://img.shields.io/badge/react-%5E18.2.0-green" >

</p>

## Descrição

Desenvolvimente de uma aplicação de controle de custos financeiros utilizando React, com Typescript e Redux Toolkit.

## Orientações para rodar o projeto localmente

Após clonar e acessar o repositório, instale as dependências e inicialize o projeto

- Instale as dependências:
  - `yarn`
- Inicialize o projeto:
  - `yarn dev` (abra seu navegador em -> http://localhost:5174/)
- Executar os testes:
  - `yarn test`
- Verificar a cobertura de testes da aplicação (coverage):
  - `yarn coverage`
- Abrir a UI de testes (vitest):
  - `yarn test:ui`

</details>

## Técnologias utilizadas

Resumo das tecnologias e a necessidade do uso.

- React;
- Typescript: Para um melhor debug do código;
- [Vite](https://vitejs.dev/): Para criação de projetos react;
- [styled-components](https://styled-components.com/) Styled Components: Para estilização de componentes, estilo global e criação de themas;
- [ReduxToolkit](https://redux-toolkit.js.org/): Para controle do estado no frontend;
- [Vitest](https://vitejs.dev/) e [Testing library](https://vitejs.dev/) : Para testes unitários

## Estrutura do repositório

Às vezes é útil saber para que servem todos esses arquivos diferentes.

```
/
├─ public/
├─ src/
│  ├─ @types/           # Tipagem
│  ├─ assets/           # Imagens e icones
│  ├─ components/       # Componentes reutilizáveis
│  ├─ pages/            # Páginas
│  ├─ redux/            # Controle de estado
│  ├─ styles/           # Estilos globais e thema
│  ├─ test/             # Setup de testes
│  └─ utils/            # Funções globais
│
├─ .eslintrc.json       # Preferências do ESLint
├─ .gitignore           # Arquivos ignorados pelo git
├─ index.html           # HTML principal da aplicação
├─ README.md            # This file
├─ tsconfig.json        # Configurações do Typescript
├─ tsconfig.node.json   # Configurações do tsnode
├─ vite.config.json     # Configurações do Vite
└─ yarn.lock            # Configurações do Yarn
```
