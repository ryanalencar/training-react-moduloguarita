### Route dashboard
Adquirir status do servidor, e realiza configurações do servidor.

#### CONFIG saveall
> *Apenas para token de administradores autenticados*

Salva imediatamente todos os dados em memória no banco de dados.
Utilizar antes de reiniciar o servidor por algum motivo

**GET:** ```{{url}}/saveall```

*response:*
``` json
// exemplo:
{
  "clients": [
    {
      "name": "EQUIPMENT NAME",
      "saved": true // status
    },
    {
      "name": "AVATAR EQUIPMENT",
      "saved": true
    }
    // ...
  ],
  // mesnagem de notificação se houver
  "notifyList": [
    {
      "success": true,
      "error": 0,
      "type": "success",
      "message": "98 guarita(s) salvos com sucesso!"
    }
  ]
}
```

#### STATUS index
Mostra resumo do servidor

**GET:** ```{{url}}/dashboard/status```

*response:*
``` json
// exemplo:
{
  "version": "1.0.0",
  "name": "domusguarita",
  "description": "Servidor Domus Guarita Linear HCS",
  "serverGuarita": {
    "timeout": 10000,
    "port": 8000,
    "listening": true,
    "count": 98
  },
  "serverControl": {
    "timeout": 10000,
    "port": 8001,
    "listening": true,
    "count": 70
  }
}
```


#### STATUS clientes
Mostra clientes conectados

**GET:** ```{{url}}/dashboard/status/clients```

*response:*
``` json
// exemplo:
{
    "totalHCS": 152,
    "totalCad": 701,
    "totalHttp": 8
}
```

#### STATUS módulos
Mostra resumo de módulos guaritas conectados

**GET:** ```{{url}}/dashboard/status/modulos```

*response:*
``` json
// exemplo:
{
    "version": "1.0.0",
    "total": 90, // conectados
    "totalCad": 98, // cadastrados
    "totalRx": 211.6923828125, // in KBytes
    "totalTx": 30.8486328125, // in KBytes
    "ping": 78.875,
    "pingMax": 3679.4375,
    "pingMin": 67.3125,
    "uptime": "18h 10m"
}
```
#### STATUS fluxo
Mostra resumo do fluxo de dados

**POST:** ```{{url}}/dashboard/status/buffered```

*request:*
``` json
// exemplo:
{
  "filter": {
    "lastDays": 60
  }
}
```

*response:*
``` json
// exemplo para fluxo dos últimos 10 dias:
{
  "filter": {
    "lastDays": 10
  },
  "buffered": [
    {
      "date": "2020-04-14",
      "rx": 231.44141999999997,
      "tx": 30.91306,
      "count": 68
    },
    {
      "date": "2020-04-15",
      "rx": 388.0703999999998,
      "tx": 54.95037000000008,
      "count": 207
    }
    // ...
  ]
}
```
#### STATUS eventos
Mostra resumo dos eventos emitidos

**POST:** ```{{url}}/dashboard/status/emitted```

*request:*
``` json
// exemplo:
{
  "filter": {
    "lastDays": 60
  }
}
```

*response:*
``` json
// exemplo para fluxo dos últimos 10 dias:
{
  "filter": {
    "lastDays": 10
  },
  "emitted": [
    {
      "date": "2020-04-14",
      "count": 11055, // total de eventos no dia
      "guaritas": 47 // modulos conectados no dia
    },
    {
      "date": "2020-04-15",
      "count": 11194,
      "guaritas": 57
    },
    // ...
  ]
}
```

