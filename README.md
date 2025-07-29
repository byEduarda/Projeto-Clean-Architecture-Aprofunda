
# 📚 API de Biblioteca com Clean Architecture, TypeScript e JWT

Este projeto é uma API simples para gerenciamento de livros, construída com os princípios da **Clean Architecture**. Utiliza autenticação com **JWT (JSON Web Token)** para proteger rotas sensíveis, como criação, edição e remoção de livros.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- Bcrypt
- Dotenv
- Jest + Supertest
- ts-node-dev

---

## ⚙️ Como configurar o projeto

### 1. Clone o repositório:

```bash
git clone https://github.com/byEduarda/Projeto-Clean-Architecture-Aprofunda.git
cd Projeto-Clean-Architecture-Aprofunda
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
MONGO_URI=SuaStringDeConexaoMongoDB
JWT_SECRET=SuaChaveSecretaSegura
```

### 4. Inicie o servidor:

```bash
npm run dev
```

> O servidor rodará por padrão em `http://localhost:3000`

---

## ✅ Testes

Para rodar os testes automatizados:

```bash
npm run test
```

Para gerar o relatório de cobertura:

```bash
npm run test:coverage
```

---

## 🔐 Autenticação JWT

A API implementa autenticação com JSON Web Token.

### Fluxo:

1. Registre um usuário com `POST /auth/register`
2. Faça login com `POST /auth/login`
3. Use o token JWT retornado para acessar rotas protegidas

Exemplo de header necessário para acesso autenticado:

```
Authorization: Bearer SEU_TOKEN_JWT
```

---

## 📌 Rotas da API

### Públicas

| Método | Rota            | Descrição                    |
|--------|-----------------|------------------------------|
| GET    | `/`             | Boas-vindas                  |
| GET    | `/books`        | Lista todos os livros        |
| GET    | `/books/:id`    | Busca um livro pelo ID       |
| POST   | `/auth/register`| Registra um novo usuário     |
| POST   | `/auth/login`   | Realiza login e retorna token|

### Protegidas (JWT obrigatório)

| Método | Rota             | Descrição                   |
|--------|------------------|-----------------------------|
| POST   | `/books`         | Cria um novo livro          |
| PATCH  | `/books/:id`     | Atualiza um livro pelo ID   |
| DELETE | `/books/:id`     | Remove um livro pelo ID     |

---

## 📦 Exemplo de uso

### Criar livro (protegido)

**POST `/books`**

**Header:**
```
Authorization: Bearer SEU_TOKEN_JWT
```

**Body:**
```json
{
  "title": "Dom Casmurro",
  "author": "Machado de Assis",
  "content": "Um romance psicológico brasileiro.",
  "status": "disponível"
}
```


---

## 💬 Sobre o projeto

Este projeto foi desenvolvido com fins educacionais, para praticar backend seguro, organizado e escalável com TypeScript, Express, MongoDB e JWT.

---

📢 **Sinta-se à vontade para clonar, estudar ou contribuir!**

