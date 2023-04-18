# Contact List

---

Aplicação para armazenar lista de contatos.

## Como rodar o projeto?

Clonar o projeto: `git clone git@github.com:Deyvs/project-school-node.git`

Instalar as dependências do através do comando: `npm install`

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

##### HTTP Status Code: 400 - Bad Request

<li>Email não enconrtado</li>

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

##### HTTP Status Code: 401 - Unautorized
