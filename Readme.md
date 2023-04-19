# Contact List

---

Aplicação para armazenar lista de contatos.

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

## Endpoints

### Criar um usuário

#### Método de requisção

`POST`

#### URL

`localhost:{PORT}/api/register`

#### Body da requisção

```
{
	"username": "Max",
	"email": "max@email.com",
	"password": "123456"
}
```

#### Body da resposta

```
{
	"status": 201,
	"message": "Created user!"
}
```

##### HTTP Status Code: 201 - Created

#### ERRORS

##### HTTP Status Code: 400 - Bad Request

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

---

### Login de usuário

#### Método de requisção

`POST`

#### URL

`localhost:{PORT}/api/login`

#### Body da requisção

```
{
	"email": "max@email.com",
	"password": "123456"
}
```

#### Body da resposta

```
{
	"status": 200,
	"data": {
		"token": "TOKEN_DE_ACESSO"
	}
}
```

##### HTTP Status Code: 200 - OK

#### ERRORS

<li>Email de usuário não cadastrado</li>

```
{
	"message": "User not Found!"
}
```

##### HTTP Status Code: 404 - Not Found

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

##### HTTP Status Code: 401 - Unauthorized

---

### Atualizar Usuário

#### Método de requisção

`PUT`

#### URL

`localhost:{PORT}/api/users/{user_id}`

#### Body da requisção

```
{
	"{campo_para_update}": "{valor}"
}
```

#### Body da resposta

```
{
	"status": 200,
	"data": {
		"message": "Updated User!"
	}
}
```

##### HTTP Status Code: 200 - OK

#### ERRORS

<li>Email de usuário não cadastrado</li>

```
{
	"message": "User not Found!"
}
```

##### HTTP Status Code: 404 - Not Found

<li>Token expirado ou inválido</li>

```
{
	"message": "User is not authorized or token is missing!"
}
```

<li>Falha na autenticação do token</li>

```
{
	"message": "Failed on authenticate token."
}
```

##### HTTP Status Code: 401 - Unauthorized

---

### Deletar Usuário

#### Método de requisção

`DELETE`

#### URL

`localhost:{PORT}/api/users/{user_id}`

#### Body da resposta

```
{
	"status": 200,
	"data": {
		"message": "Deleted User!"
	}
}
```

##### HTTP Status Code: 200 - OK

#### ERRORS

<li>Email de usuário não cadastrado</li>

```
{
	"message": "User not Found!"
}
```

##### HTTP Status Code: 404 - Not Found

<li>Token expirado ou inválido</li>

```
{
	"message": "User is not authorized or token is missing!"
}
```

<li>Falha na autenticação do token</li>

```
{
	"message": "Failed on authenticate token."
}
```

##### HTTP Status Code: 401 - Unauthorized

---

### Buscar todos os Contatos de um Usuário

#### Método de requisção

`GET`

#### URL

`localhost:{PORT}/api/users/{user_id}/contacts`

#### Body da resposta

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

##### HTTP Status Code: 200 - OK

#### ERRORS

<li>Email de usuário não cadastrado</li>

```
{
	"message": "User not Found!"
}
```

##### HTTP Status Code: 404 - Not Found

<li>Token expirado ou inválido</li>

```
{
	"message": "User is not authorized or token is missing!"
}
```

<li>Falha na autenticação do token</li>

```
{
	"message": "Failed on authenticate token."
}
```

##### HTTP Status Code: 401 - Unauthorized

---

### Buscar um Contato de um Usuário por ID

#### Método de requisção

`GET`

#### URL

`localhost:{PORT}/api/users/{user_id}/contacts/{contact_id}`

#### Body da resposta

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

##### HTTP Status Code: 200 - OK

#### ERRORS

<li>Contato não cadastrado</li>

```
{
	"message": "Contact not Found!"
}
```

<li>Email de usuário não cadastrado</li>

```
{
	"message": "User not Found!"
}
```

##### HTTP Status Code: 404 - Not Found

<li>Token expirado ou inválido</li>

```
{
	"message": "User is not authorized or token is missing!"
}
```

<li>Falha na autenticação do token</li>

```
{
	"message": "Failed on authenticate token."
}
```

##### HTTP Status Code: 401 - Unauthorized

---

### Criar um Contato para um Usuário

#### Método de requisção

`POST`

#### URL

`localhost:{PORT}/api/users/{user_id}/contacts`

#### Body da requisção

```
{
	"name": "Samantha",
	"email": "samanta@email.com",
	"phone": "21-999544329",
	"group": "Familia"
}
```

#### Body da resposta

```
{
	"status": 200,
	"data": {
		"message": "Updated contact!"
	}
}
```

##### HTTP Status Code: 200 - OK

#### ERRORS

<li>Contato não cadastrado</li>

```
{
	"message": "Contact not Found!"
}
```

<li>Email de usuário não cadastrado</li>

```
{
	"message": "User not Found!"
}
```

##### HTTP Status Code: 404 - Not Found

<li>Token expirado ou inválido</li>

```
{
	"message": "User is not authorized or token is missing!"
}
```

<li>Falha na autenticação do token</li>

```
{
	"message": "Failed on authenticate token."
}
```

##### HTTP Status Code: 401 - Unauthorized

---

### Atualizar um Contato de um Usuário por ID

#### Método de requisção

`PUT`

#### URL

`localhost:{PORT}/api/users/{user_id}/contacts/{contact_id}`

#### Body da requisção

```
{
	"{campo_para_update}": "{valor}"
}
```

#### Body da resposta

```
{
	"status": 200,
	"data": {
		"message": "Updated contact!"
	}
}
```

##### HTTP Status Code: 200 - OK

#### ERRORS

<li>Contato não cadastrado</li>

```
{
	"message": "Contact not Found!"
}
```

<li>Email de usuário não cadastrado</li>

```
{
	"message": "User not Found!"
}
```

##### HTTP Status Code: 404 - Not Found

<li>Token expirado ou inválido</li>

```
{
	"message": "User is not authorized or token is missing!"
}
```

<li>Falha na autenticação do token</li>

```
{
	"message": "Failed on authenticate token."
}
```

##### HTTP Status Code: 401 - Unauthorized

---

### Deletar um Contato de um Usuário por ID

#### Método de requisção

`PUT`

#### URL

`localhost:{PORT}/api/users/{user_id}/contacts/{contact_id}`

#### Body da resposta

```
{
	"status": 200,
	"data": {
		"message": "Deleted contact!"
	}
}
```

##### HTTP Status Code: 200 - OK

#### ERRORS

<li>Contato não cadastrado</li>

```
{
	"message": "Contact not Found!"
}
```

<li>Email de usuário não cadastrado</li>

```
{
	"message": "User not Found!"
}
```

##### HTTP Status Code: 404 - Not Found

<li>Token expirado ou inválido</li>

```
{
	"message": "User is not authorized or token is missing!"
}
```

<li>Falha na autenticação do token</li>

```
{
	"message": "Failed on authenticate token."
}
```

##### HTTP Status Code: 401 - Unauthorized

## Futuras melhorias

<li> Implementar Logs 
<li> Impplementar Testes
<li> Filtros para buscas personalizadas
