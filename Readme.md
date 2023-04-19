# Contact List

Aplicação desenvolvida para criar uma lista de contatos.

## Tecnologias utlizadas

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Typesscript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Ferramentas utlizadas

![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## Árvore de diretórios

```
├── Insomnia_2023-04-18.json
├── Readme.md
├── package-lock.json
├── package.json
├── src
│   ├── app.ts
│   ├── config
│   │   └── db.cnonnection.ts
│   ├── controllers
│   │   ├── contact
│   │   │   ├── contacts.controller.ts
│   │   │   └── index.ts
│   │   ├── index.ts
│   │   └── user
│   │       ├── index.ts
│   │       └── user.controller.ts
│   ├── helpers
│   │   └── api.errors.ts
│   ├── middlewares
│   │   ├── error.handler.ts
│   │   └── validation.token.handler.ts
│   ├── models
│   │   ├── contact.model.ts
│   │   └── user.model.ts
│   ├── repositories
│   │   ├── contact.repository.ts
│   │   └── user.repository.ts
│   ├── routes
│   │   ├── index.ts
│   │   └── user.route.ts
│   └── services
│       ├── contact.service.ts
│       └── user.service.ts
└── tsconfig.json

11 directories, 23 files
```

---

## Como rodar o projeto?

Clonar o projeto: `git clone git@github.com:Deyvs/project-school-node.git`

Instalar as dependências do através do comando: `npm install`

Configurar variáveis de ambiente e a string de conexão com o DB

Rodar a aplicação com o comando:`npm start`

## Variáveis de ambiente

```
PORT=3000 // Escolher a porta que a aplicação irá rodar
DATABASE_URL=mongodb://localhost:{PORT_DB}/{NOME_DB} // String de conexão
JWT_SECRET_KEY={SECRETE_KEY} // Adicionar secret key
```

## Recursos da Aplicação

| Endpoints                                                    | Métodos HTTP | Descrição                              |
| ------------------------------------------------------------ | :----------: | -------------------------------------- |
| `localhost:{PORT}/api/register`                              |    `POST`    | Criar um usário                        |
| `localhost:{PORT}/api/login`                                 |    `POST`    | Autenticar um usuário                  |
| `localhost:{PORT}/api/users/{user_id}`                       |    `PUT`     | Atualizar os dados de um usuário       |
| `localhost:{PORT}/api/users/{user_id}`                       |   `DELETE`   | Deletar um usuário                     |
| `localhost:{PORT}/api/users/{user_id}/contacts`              |    `GET`     | Buscar todos os contatos de um usuário |
| `localhost:{PORT}/api/users/{user_id}/contacts/{contact_id}` |    `GET`     | Buscar um contato de usuário           |
| `localhost:{PORT}/api/users/{user_id}/contacts`              |    `POST`    | Criar um contato de um usuário         |
| `localhost:{PORT}/api/users/{user_id}/contacts/{contact_id}` |    `PUT`     | Atualizar um contato de um usuário     |
| `localhost:{PORT}/api/users/{user_id}/contacts/{contact_id}` |   `DELETE`   | Deletar um contato de um usuário       |

## Body de Requisição e Resposta

### Criar usuário

<li> <strong>Requisição<strong> </li>

```
{
	"username": "Max",
	"email": "max@email.com",
	"password": "123456"
}
```

<li> <strong>Resposta<strong> </li>

```
{
	"status": 201,
	"message": "Created user!"
}
```

### Login de usuário

<li> <strong>Requisição<strong> </li>

```
{
	"email": "max@email.com",
	"password": "123456"
}
```

<li> <strong>Resposta<strong> </li>

```
{
	"status": 200,
	"data": {
		"token": "TOKEN_DE_ACESSO"
	}
}
```

### Ataulizar usuário

<li> <strong>Requisição<strong> </li>

```
{
	"{campo_para_update}": "{valor}"
}
```

<li> <strong>Resposta<strong> </li>

```
{
	"status": 200,
	"message": "Updated user!"
}
```

### Deletar usuário

<li> <strong>Resposta<strong> </li>

```
{
	"status": 200,
	"message": "Deleted user!"
}
```

### Buscar contatos de um usuário

<li> <strong>Resposta<strong> </li>

```
{

	"status": 200,
	"length": 1,
	"data": {
		"user_id": "643f1dd2756e0446c61bda10",
		"username": "Max",
		"email": "max@email.com",
		"contacts": [
			{
				"_id": "643f25d0d99a05ef85626ad8",
				"user_id": "643f1dd2756e0446c61bda10",
				"name": "Samanta",
				"email": "samanta@email.com",
				"phone": "21-999544329",
				"group": "Familia",
				"createdAt": "2023-04-18T23:20:48.912Z",
				"updatedAt": "2023-04-18T23:20:48.912Z",
				"__v": 0
			}
		],
		"createdAt": "2023-04-18T22:46:42.416Z",
		"updateAt": "2023-04-18T22:46:42.416Z"
	}

}
```

### Buscar contatos de um usuário pelo ID

<li> <strong>Resposta<strong> </li>

```
{
	"status": 200,
	"data": {
		"contact": {
			"_id": "643f25d0d99a05ef85626ad8",
			"user_id": "643f1dd2756e0446c61bda10",
			"name": "Samanta",
			"email": "samanta@email.com",
			"phone": "21-999544329",
			"group": "Familia",
			"createdAt": "2023-04-18T23:20:48.912Z",
			"updatedAt": "2023-04-18T23:20:48.912Z",
			"__v": 0
		}
	}
}
```

### Criar um contato

<li> <strong>Requisição<strong> </li>

```
{
	"name": "Samantha",
	"email": "samanta@email.com",
	"phone": "21-999544329",
	"group": "Familia"
}
```

<li> <strong>Resposta<strong> </li>

```
{
	"status": 201,
	"message": "Created contact!"
}
```

### Ataulizar um contato

<li> <strong>Requisição<strong> </li>

```
{
	"{campo_para_update}": "{valor}"
}
```

<li> <strong>Resposta<strong> </li>

```
{
	"status": 200,
	"message": "Updated contact!"
}
```

### Deletar um contato

<li> <strong>Resposta<strong> </li>

```
{
	"status": 200,
	"message": "Deleted user!"
}
```

## Erros

### HTTP Status Code: 400 - Bad Request

<li>Não é permitido dois ou mais usuários com o mesmo e-amil</li>

```
{
	"message": "Email already registered!"
}
```

<li>Não é permitido campos vazios</li>

```
{
	"message": "All fields are mandatory!"
}
```

### HTTP Status Code: 401 - Unauthorized

<li>Senha errada</li>

```
{
	"message": "Authentication failed!"
}
```

<li>Falha na autenticação do token</li>

```
{
	"message": "Failed on authenticate token."
}
```

<li>Token expirado ou inválido</li>

```
{
	"message": "User is not authorized or token is missing!"
}
```

### HTTP Status Code: 404 - Not Found

<li>Email de usuário não cadastrado</li>

```
{
	"message": "User not Found!"
}
```

<li>Contato não cadastrado</li>

```
{
	"message": "Contact not Found!"
}
```

---

## Futuras melhorias

<li> Implementar Logs 
<li> Impplementar Testes
<li> Filtros para buscas personalizadas
