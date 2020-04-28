### Route usuarios

#### me
Adquiri informações do usuário atual (autenticado)

**GET:** ```{{url}}/users/me``` 

*response:*
``` javascript
// exemplo:
{
  "id": 987654,
  "nome": "Leandro Sbrissa",
  "sexo": "M",
  "email": "leandro.sbrissa@hotmail.com",
  "emok": true,
  "nivel": 9,
  "nasc": '1983-05-27',
  "tel": "(99) 9999-9999",
  "cel": "(99) 99999-9999",
  "cpf": "111.111.111-11",
  "rg": "123456789",
  "bloq": false,
  "ativo": true,
  "dtinc": "2020-01-01T15:15:13.000Z",
  "dtalt": null
}
```
#### saveme
Alterar informações do usuário atual (autenticado)

**POST:** ```{{url}}/users/saveme```

*request:*
``` javascript
// exemplo:
{
  "nome": "Name here",
  "sexo": "M",
  "email": "exemplo@domain.com",
  "nivel": 9,
  "nasc": '1983-05-27',
  "tel": "(99) 9999-9999",
  "cel": "(99) 99999-9999",
  "cpf": "111.111.111-11",
  "rg": "123456789",
  "bloq": false,
  "ativo": true,
}
```

*response:*
``` javascript
// exemplo:
{
  "success": true,
  "edited":{
    "id": 987654,
    "nome": "Leandro Sbrissa",
    "sexo": "M",
    "email": "leandro.sbrissa@hotmail.com",
    "emok": true,
    "nivel": 9,
    "nasc": '1983-05-27',
    "tel": "(99) 9999-9999",
    "cel": "(99) 99999-9999",
    "cpf": "111.111.111-11",
    "rg": "123456789",
    "bloq": false,
    "ativo": true,
    "dtinc": "2020-01-01T15:15:13.000Z",
    "dtalt": 987654,
  },
  "notify": [
    {
      "success": true,
      "error": 0,
      "type": "success",
      "message": "Informações alteradas com sucesso!"
    }
  ]
}
```

#### list
> *Apenas para token de administradores autenticados*

Listar usuários cadastrados

**POST:** ```{{url}}/users/list```

*request:*
``` javascript
// pagination
{
  "page": 1,
  "size": 10,
  "orderby": "id",
  "order": "asc"
}
```

*response:*
``` javascript
{
  "page": 1,
  "pages": 1,
  "total": 13,
  "size": 13,
  "orderby": "id",
  "order": "asc",
  "data": [
    {
      "id": 987654,
      "nome": "Leandro Sbrissa",
      "fn": "Leandro",
      "sexo": "M",
      "email": "leandro.sbrissa@hotmail.com",
      "emok": true,
      "nivel": 9,
      "nasc": '1983-05-27',
      "tel": "(85) 3333-3333",
      "cel": "(85) 99999-9999",
      "bloq": false,
      "ativo": true,
      "dtinc": "2019-09-13T15:15:13.000Z",
      "dtalt": "2020-04-27T19:17:43.000Z",
      // se usuario estiver online
      "online": [
        {
          "ip": "127.0.0.1",
          "on": true,
          "browser": "firefox",
          "opsys": "Windows 10.0",
          "mobile": false
        }
      ]
    },
    {
      "id": 987655,
      "nome": "Nome do usuario",
      "sexo": "M",
      "email": "examplo@domain.com",
      "emok": true,
      "nivel": 7,
      "bloq": false,
      "ativo": true,
      "online": []
    },
    // ...
  ]
}
```

#### create
Criar novo usuário

**POST:** ```{{url}}/users/create```

*request:*
``` javascript
// exemplo (user data):
{
  "nome": "Nnome do usuario"
  "email": "examplo@domain.com",
  "sexo": "M", // M or F
  "nivel": 3,
  "tel": "(99) 9999-9999",
  "cel": "(99) 99999-9999",
  // ...
}
```
*response:*
``` javascript
// exemplo:
{
  "success": true,
  "data": {
    "id": 987656,
    // ... rest user data
  },
  "notify": [
    {
      "success": true,
      "error": 0,
      "type": "success",
      "message": "Usuário criado com sucesso!"
    }
  ]
}
```
###forgot
Equeceu a senha, enviar email de recuperação

**POST:** ```{{url}}/users/forgot``` 

*request:*
``` javascript
// exemplo:
{
  "email": "example@domain.com",
}
```
*response:*

``` javascript
{
  "success": true,
  "notify": [
    {
      "success": true,
      "error": 0,
      "type": "success",
      "message": "E-mail de recuperação enviado."
    }
  ]
  
}
```
