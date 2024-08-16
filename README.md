# Domain Driven Design with Node.js

This code shows an example of an application structure in Node.js modeled with some Domain Driven Design concepts.

More details about the basis of this project can be seen [in this presentation in portuguese](https://speakerdeck.com/danielbdias/modelando-sua-aplicacao-node-dot-js-com-domain-driven-design).

The user stories that we will model are:

```
- "The address must be used in the GPS to calculate the route"
- "I must be able to save my home and work addresses in the application"
- "An address is unique in the system and must have a street, number, zip code, city, and type (home or work)"
- "A route is a set of ordered instructions that describe the direction to follow to the destination"

```

The requirements to run this code are:
- Node.js 12 ([how to install?](https://github.com/backend-br/como-instalar-xyz/tree/master/tutoriais/nodejs))
- Yarn package manager ([how to install?](https://yarnpkg.com/pt-BR/docs/install#alternatives-stable))
- Docker, with docker-compose ([how to install?](https://github.com/backend-br/como-instalar-xyz/tree/master/tutoriais/docker))

### How to start the application?

1. Run the `yarn install` command in the code root folder to install the dependencies;
2. 2. Start the Postgres database in a docker container with `docker-compose up -d`
3. Create the initial database data with `yarn db:migrate`
4. Start the application with `yarn start`

### How to run an application use case

Access the url http://localhost:4000 in your browser, and once the GraphQL Playground has been loaded, perform the following steps:

1. Run the `SaveData` mutation to insert the data into the database:

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

2. Execute the mutation `TraceRouteTroll` to run the use case:

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
### Notes

This code is an example of how to apply DDD theory to a Node.js / Javascript project, with some adaptations relevant to the language.

Feel free to contact me if you have any questions at [@danielbdias](https://twitter.com/danielbdias)
