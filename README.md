# Domain Driven Design no Node.js

Este código mostra um exemplo de estrutura de aplicação em Node.js modelada com alguns conceitos de Domain Driven Design.

Mais detalhes sobre a base deste projeto podem ser vistos [nesta apresentação](https://speakerdeck.com/danielbdias/modelando-sua-aplicacao-node-dot-js-com-domain-driven-design). 

As histórias que vamos modelar são:

````
- "O endereço deve ser usado no GPS para conseguir calcular a rota"
- "Eu devo poder salvar meu endereço de casa e do trabalho no aplicativo"
- "Um endereço é único no sistema e deve ter um logradouro, número, CEP, cidade e tipo (residência ou trabalho)"
- "Uma rota é um conjunto de instruções ordenadas, que descrevem a direção a seguir para o destino"

````

Os requisitos para rodar este código são:
- Node.js 12 ([como instalar?](https://github.com/backend-br/como-instalar-xyz/tree/master/tutoriais/nodejs))
- Yarn package manager ([como instalar?](https://yarnpkg.com/pt-BR/docs/install#alternatives-stable))
- Docker, com o docker-compose ([como instalar?](https://github.com/backend-br/como-instalar-xyz/tree/master/tutoriais/docker))

### Como iniciar a aplicação?

1. Rode o comando `yarn install` na pasta raiz do código para instalar as dependências;
2. Inicie o banco de dados postgres em um container docker com `docker-compose up -d`
3. Crie os dados iniciais do banco de dados com `yarn db:migrate`
4. Inicie a aplicação com `yarn start`

### Como executar um caso de uso da aplicação

Acesse a url http://localhost:4000 no seu navegador, e uma vez que o GraphQL Playground foi carregado, execute os seguintes passos:

1. Execute a mutation `SaveData` para inserir os dados no banco de dados:

````
mutation SaveData {
  saveAddress(address: {
    name: "Rodovia Virgílio Varzea",
    number: 400,
    zipCode: "88032000",
    city: "Florianópolis",
    state: "Santa Catarina",
    kind: "work"
  }) {
    id
    name
    number
    complement
    zipCode
    city
    state
    kind
  }

  saveAddress(address: {
    name: "Rua Gomes de Carvalho",
    number: 1666,
    complement: "Bloco 2",
    zipCode: "04547006",
    city: "São Paulo",
    state: "São Paulo",
    kind: "work"
  }) {
    id
    name
    number
    complement
    zipCode
    city
    state
    kind
  }

  saveGPS(gps: {
    type: "gmaps"
  }) {
    type
  }

  saveGPS(gps: {
    type: "troll"
  }) {
    type
  }
}

````

2. Execute a mutation `TraceRouteTroll` para executar o Use Case:

```
query TraceRouteTroll {
  traceRoute(originId: 11, destinationId: 12, gpsType: "troll") {
    origin {
      name
      number
      city
    }
    destination {
      name
      number
      city
    }
    instructions {
      order
      description
    }
  }
}
```

### Observações

Este código é um exemplo de como aplicar a teoria do DDD em um projeto Node.js / Javascript, com algumas adaptações pertinentes a linguagem.

Sinta-se a vontade para contactar no caso de quaisquer dúvidas em [@danielbdias](https://twitter.com/danielbdias)
