### Route sessions

#### token
> *Apenas administradores autenticados*

Adquirir token individual

**POST:** ```{{url}}/sessions/token``` 

*request:*
``` javascript
// exemplo:
{
  "iduser": 987654,
  "expires": '1h' // expira em 1 hora
}
```
omitir *expires* para gerar token permanente

``` javascript
// exemplo:
{
  "iduser": 987654
}
```

*response:*
``` javascript
// exemplo:
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // token
  "auth": {
    "id": 987654,
    "email": "example@domain.com",
    "nivel": 7,
    "cookie": "3449c9e5e332f1dbb81505cd739fbf3f",
    "iat": 1588033022
  }
}
```

####online
Usado para informar o servidor que usuário está online
*obs.: somente quando não houver estado se sessão*

**GET:** ```{{url}}/sessions/online``` 

*response:*
``` javascript
// exemplo:
{
  "idOnline": 79005954,
  "data": {
    "cookie": "3449c9e5e332f1dbb81505cd739fbf3f",
    "ip": "127.0.0.1",
    "on": true,
    "browser": "postmanruntime",
    "opsys": "unknown",
    "mobile": false
  },
  "user": {
    "id": 987654,
    "nome": "Nome usuario",
    "nivel": 6,
    "email": "example@domain.com",
    "ativo": true
  }
}
```

####auth 
Autenticar usuário e receber token (login)

**POST:** ```{{url}}/sessions/auth``` 
**POST:** ```{{url}}/users/auth``` 

*request:*
``` javascript
// exemplo:
{
  "email": "example@domain.com",
  "password": "3449c9e5e332", // exemplo
}
```
*response:*

``` javascript
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9......",
  "expires": "2020-01-01 22:42:36",
  "data": {
    "id": 1,
    "nome": "Nome do usuario",
    "nivel": 6,
    "email": "example@domain.com",
    "ativo": true
  }
}
```

####logout 
realizar logoff do usuário

**GET:** ```{{url}}/sessions/logout``` 

*response:*

``` javascript
{
  "success": true,
  "notify": [
    {
      "success": true,
      "error": 0,
      "type": "success",
      "message": "Sessão encerrada."
    }
  ]
}
```
