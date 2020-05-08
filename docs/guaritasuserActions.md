### Route guaritasuser actions
Acionamento de relés do módulo

#### actions
Envia comando de ação para o módulo
*Mostra apenas equipamento autorizados para usuário logado*

**POST:** ```{{url}}/guaritasuser/actions```

*request:*
``` javascript
{
  "idguarita": 112,
  "deviceType":1,
  "can":1,
  "out":1,
  "createEvent": true
}
```

*response:*
``` javascript
{
  "success": true,
  "guarita": {
    "id": 112,
    "label": "AVATAR T",
    "active": true,
    "timezone": "America/Fortaleza",
  },
  "command": "000D01000101" // example buffer
}
```

*Formato de erro:*
``` javascript
{
  "success": false,
  "error": 3, // *
  "type": "warning",
  "message": "Nenhum guarita solicitado" // *
}
```
* error: 1 - status: 401, message: Nenhum guarita soliciatdo
* error: 2 - status: 403, message: Módulo guarita não encontrado
* error: 3 - status: 401, message: Módulo guarita offline
* error: 4 - status: 401, message: Nenhum comando atribuído
