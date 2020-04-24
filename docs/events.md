### Route events

**GET:** ``` {url}/events/types ```

*response:*
``` json
// lista tipos de eventos possíveis
{
  "eventTypeOptions": [
    { "id": 0, "title": "Dispositivo" },
    { "id": 1, "title": "Passagem" },
    // ...
  ],
  "deviceTypeOptions": [
    { "id": 0, "title": "none" },
    { "id": 1, "title": "Receptor TX" },
    // ...
  ],
  "vehicleOptions": [
    { "id": 0, "title": "AUDI" },
    { "id": 1, "title": "BMW" },
    // ...
  ],
  "vehicleColorOptions": [
    { "id": 0, "title": "AMARELO" },
    { "id": 1, "title": "AZUL" }
    // ...
  ]
}
```


**POST:** ``` {url}/events/list ```

*request:*
``` json
// listar eventos de um guarita
{
  "idguarita": 112
}
```
``` json
// filtrar eventos
{
  "filter": {
    "eventType": 0
  },
  "order": "desc",
  "orderby": "id",
  "size": 25
}
```

*response: (pagination)*
``` json
{
  "online": true,
  "name": "EQUIPAMENT NAME",
  "page": 1,
  "pages": 121833,
  "total": 3045806,
  "size": 25,
  "orderby": "id",
  "order": "desc",
  "data": [
    {
      "id": 3048553,
      "idg": 1234, // somente administrador autenticado
      "updateCount": 4,
      "eventType": 0,
      "device": 1,
      "can": 1,
      "out": 1,
      "bloco": 1,
      "unidade": 100,
      "digitalId": 0,
      "serial": "41CFF65",
      "dtevent": "2020-04-23 19:33:19",
      "labelBloco": {
        "label": "BLOCO A ",
        "pointer": 1
      },
      "labelCan": {
        "label": "REC RF A",
        "pointer": 27
      },
      "labelOut": {
        "label": "SAIDA 1",
        "pointer": 28
      },
      "labelDevice": {
        "label": "LEANDRO",
        "vehicle": 6,
        "vehicleColor": 4,
        "vehiclePlate": "AAA-0001",
        "brand": "FIAT",
        "color": "CINZA"
      },
      "eventLabel": "Dispositivo",
      "deviceLabel": "Receptor TX",
      "reportLabels": false,
      // somente administrador autenticado
      "guarita": {
        "name": "HORTUS MARAPONGA",
        "timezone": "America/Fortaleza",
        "online": false
      }
    }
    // ...
  ]
}
```
