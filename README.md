# Projeto de API com Clean Architecture usando TypeScript e Express

Este projeto é uma API simples para gerenciamento de livros, construída seguindo os princípios da Clean Architecture. Utiliza TypeScript e Express para oferecer funcionalidades básicas como criação e listagem de livros.


## Tecnologias utilizadas

- Node.js
- Express.js
- Nodemon
- Cors
- Supertest
- Jest

## Como configurar

Clone este repositório:

``git clone + endereço do repositório``

Entre na pasta do projeto:

``cd nome-da-pasta``

Instale as dependências:

``npm install``

Inicie o servidor:

``npm run dev``

Obs: É importante ter o Node.js e npm instalados em sua máquina. Além disso, recomenda-se instalar o TypeScript globalmente para facilitar o desenvolvimento:

``npm install -g typescript``

## Execução dos testes

Para executar a suíte de testes:

``npm run test``

Para gerar um relatório detalhado de cobertura dos testes:

``npm run test:coverage``

## Rotas

Endpoints disponíveis

- **GET /**: Retorna uma mensagem de boas-vindas.
- **GET /books**: Lista todos os livros cadastrados.
- **POST /book**: Adiciona um novo livro.
- **GET /book/:id**: Busca um livro específico pelo seu ID.
- **PATCH /book/:id**: Atualiza os dados de um livro pelo ID.
- **DELETE /book/:id**: Deleta um livro pelo ID.

## Exemplo de uso

## Para criar um livro, envie uma requisição POST para /book com o seguinte JSON no corpo da requisição:

```json
{
  "title": "O Senhor dos Anéis",
  "author": "J.R.R. Tolkien",
  "content": "Uma história épica de fantasia.",
  "status": "disponível"
}
```
