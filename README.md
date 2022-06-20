
# Componente NodeJs HTTP

  

<p  align="left">  <img  src="http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=orange&style=for-the-badge"/>  </p>

  

> Versão 1.0.0 Componente node para requisições HTTP.

  

### Instalação
1. Instalar o componente **HTTP**

### Funcionalidades disponíveis

  

| HttpRequestServices | |

| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |

| `execute<T>(method: HTTPMethod, path: string, queryParams?: HttpParameters, headerParams?: HttpParameters)` | Constrói uma solicação HTTP de acordo com o tipo informado e retorna a resposta como o tipo de objeto informado. |

| |

  

### Utilização

  

Para começar a usar o "Module HTTP" com Angular, siga as etapas abaixo:

  

1. Adicione o modulo `HttpModule` no `imports` no arquivo `src/app/app.module.ts`:

  

```typescript

import { AppComponent } from  './app.component';

import { AuthorizeGard } from  './guard/AuthorizeGuard';

import { HttpModule } from  '@angular-module/http';

import { NgModule } from  '@angular/core';

  

@NgModule({

declarations: [AppComponent],

imports: [HttpModule],

bootstrap: [AppComponent],

})

export  class  AppModule {}

```

  

2. Injete a classe de serviço **HttpRequestServices** no construtor do componente que irá utilizar:

  

```typescript

import { HttpRequestServices } from  '@angular-module/http';

import { Injectable } from  '@angular/core';

  

@Injectable({

providedIn:  'root',

})

export  class  ServiceClass {

constructor(private  httpRequestServices: HttpRequestServices) {}

}

```

  

3. Para realizar uma requisição, será necessário executar o método **execute** da classe **HttpRequestServices**. Esse método recebe

alguns parâmetros, sendo os três primeiros obrigatórios:

  

- **@param method (_[HTTPMethod]()_)**: Tipo de metodo utilizado na reqisição.

 - **@param path (_string_)**: URL do endpoint para requisição.


```typescript

import {

HttpRequestServices,

AuthorizationToken,

HTTPMethod,

HttpCredencial

} from  '@angular-module/http';

import { Injectable } from  '@angular/core';

import { Observable } from  'rxjs';

@Injectable({
providedIn:  'root',
})

export  class  ServiceClass {
constructor(private  httpRequestServices: RequestServices) {}

todo(): Observable<any[]> {

return  this.httpRequestServices.execute<any[]>(HTTPMethod.Get, `/url`,);

}

}

```

  

## Contribuidores

  

Esse projeto foi desenvolvido pela squad Foundation.
