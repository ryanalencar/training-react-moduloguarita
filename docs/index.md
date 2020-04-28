### Route index
Adquirir status do servidor

#### theme
Adquriri tema de cores. 
*Essa rota não precisa de token de autenticação.*

**GET:** ```{{url}}/theme```

*response:*
``` javascript
// exemplo:
{
  "app": {
    "version": "1.0.11",
    "appname": "domusguarita",
    "description": "Servidor Domus Guarita Linear HCS",
    "theme": {
      "primary": { "color": "#122A54" },
      "bgprimary": {
        "color": "#FFFFFF",
        "background": "#122A54"
      },
      "secundary": { "color": "#0D7ECC" },
      "bgsecundary": {
        "color": "#FFFFFF",
        "background": "#0D7ECC"
      },
      "contrast": { "color": "#BB1806" },
      "bgcontrast": {
        "color": "#FFFFFF",
        "background": "#BB1806"
      },
      "charts": {
        "primary": "#8884d8",
        "secundary": "#82ca9d",
        "contrast": "#FF0000"
      }
    }
  },
  "success": true,
  "error": 0,
  "type": "success",
  "message": "Config ok"
}
```
