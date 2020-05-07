### Route guaritasuser
Adquirir informações dos módulos guarita

#### list
Adquriri lista de guaritas do usuário autenticado. 
*Mostra apenas equipamento autorizados para usuário logado*

**POST:** ```{{url}}/guaritasuser/list```

*request:*
``` javascript
{
  "page": 1,
  "size": 10,
  "orderby": "id",
  "order": "asc",
  "filter": {
    "text": "avatar"
  }
}
```

*response:*
``` javascript
// exemplo:
{
  "pages": 10,
  "total": 97,
  "page": 1,
  "orderby": "id",
  "order": "asc",
  "size": 10,
  "data": [
    {
      "mac": "801F12191665",
      "ver": "A116vu",
      "keepalive": 1,
      "ip": "192.168.0.10",
      "ping": 1.875,
      "online": true,
      "id": 112,
      "idu": 1, // (admin only)
      "idg": 2, // (admin only)
      "label": "AVATAR T",
      "active": true
    },
    // ...
  ]
} 
```
