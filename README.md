# 📚 API RESTful de Gerenciamento de Livros
📖 Descrição do Projeto

Este projeto consiste no desenvolvimento de uma API RESTful utilizando Node.js, Express e MongoDB, com o objetivo de gerenciar informações de livros.
A API permite realizar operações básicas de CRUD (Create, Read, Update e Delete), seguindo boas práticas de desenvolvimento backend, padronização REST e tratamento adequado de erros.

O projeto foi desenvolvido como atividade acadêmica, atendendo aos requisitos propostos de validação de dados, uso correto de métodos HTTP e retorno de códigos de status apropriados.

# 🎯 Objetivos

- Implementar uma API RESTful funcional

- Utilizar MongoDB como banco de dados NoSQL

- Aplicar validações de entrada de dados

- Retornar códigos HTTP adequados para cada situação

- Documentar claramente a aplicação e seu uso

# 🛠️ Tecnologias Utilizadas

- Node.js

- Express

- MongoDB

- Mongoose

- dotenv

- nodemon (ambiente de desenvolvimento)

# ⚠️ Validações e Tratamento de Erros

Campos obrigatórios não podem ser nulos ou vazios

Retorno de códigos HTTP apropriados:

400 – Requisição inválida (dados ausentes ou incorretos)

404 – Recurso não encontrado

500 – Erro interno do servidor

Mensagens de erro claras e descritivas em formato JSON

# 🔐 Configuração do Ambiente
Pré-requisitos

Node.js instalado

MongoDB instalado e em execução local

Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

PORT=3000
MONGO_URI=mongodb://localhost:27017/api_livros

# ▶️ Como Executar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/api-livros.git


Acesse a pasta do projeto:

cd api-livros


Instale as dependências:

npm install


Execute a aplicação:

npm run dev


O servidor será iniciado em:

http://localhost:3000

🧪 Testes da API

Os testes podem ser realizados utilizando Postman, Insomnia ou curl.

Exemplo – Criar um livro (POST)
curl -X POST http://localhost:3000/api/livros \
-H "Content-Type: application/json" \
-d '{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "anoPublicacao": 1899,
  "genero": "Romance"
}'

Exemplo – Listar livros (GET)
curl http://localhost:3000/api/livros

# 📑 Padrões e Boas Práticas Aplicadas

Arquitetura modular (separação de rotas, controllers e models)

Uso do padrão REST

Código legível e comentado

Uso de variáveis de ambiente

Tratamento de exceções

Padronização de respostas HTTP

# 👩‍🎓 Contexto Acadêmico

Projeto desenvolvido como atividade avaliativa da Pós-Graduação, com foco em desenvolvimento backend, APIs RESTful e integração com banco de dados NoSQL.


# 📬 Autor

Maria Isabelli Pinto
Projeto acadêmico – Pós-Graduação
