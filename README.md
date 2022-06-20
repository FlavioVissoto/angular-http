# Angular Pack - HTTPClient

Esse projeto foi criado para facilitar as consultas HTTP realizadas em projetos Angular.

[![npm](https://img.shields.io/npm/svg?style=flat-square)]()
[![GitHub stars](https://img.shields.io/github/stars//svg?label=GitHub%20Stars&style=flat-square)]()
[![npm Downloads](https://img.shields.io/npm/dw/svg?style=flat-square)]()

## Installation

```bash
npm install -D angular-pack/httpclient
```

## Exemplo de uso

Após a instalação do pacote, é necessário adicionar a classe de serviço no providers do modulo que for utilizar.

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HttpRequestClientServices],
  bootstrap: [AppComponent],
})
```
