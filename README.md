# Domain Driven Design no Node.js

Este código mostra um exemplo de estrutura de aplicação em Node.js modelada com alguns conceitos de Domain Driven Design.

As histórias que vamos modelar são:

````
"O endereço deve ser usado no GPS para conseguir calcular a rota"
"Eu devo poder salvar meu endereço de casa e do trabalho no aplicativo"
"Quero ver o histórico das minhas últimas pesquisas"

````

Os requisitos para rodar este código são:
- Node.js 12 ([como instalar?](https://github.com/backend-br/como-instalar-xyz/tree/master/tutoriais/nodejs))
- Yarn package manager ([como instalar?](https://yarnpkg.com/pt-BR/docs/install#alternatives-stable))
- Docker, com o docker-compose ([como instalar?](https://github.com/backend-br/como-instalar-xyz/tree/master/tutoriais/docker))

### How to start the app

First, run `yarn install` on the root folder of this code, giving the following output:

````

➜  domain-driven-design-in-nodejs git:(master) ✗ yarn install
yarn install v0.24.6
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.54s.

````

After that, start a sample postgres database on Docker running: `docker-compose up -d`, giving the following results:

````

➜  nodebr-meetup-ddd-demo git:(master) ✗ docker-compose up -d
Starting nodebrmeetupddddemo_postgres_1 ...
Starting nodebrmeetupddddemo_postgres_1 ... done

````

Finally, just run `yarn start` to run the application locally.

````

➜  nodebr-meetup-ddd-demo git:(master) ✗ yarn start
yarn start v0.24.6
$ NODE_ENV=development NODE_PATH=./ nodemon Infra/api/server.js
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node Infra/api/server.js`
Connected to database tweets on localhost:5432
Scup Care Billing Api is running on port 8000

````

### Execute the use case proposed here

Just enter in http://localhost:8000/graphiql in your browser, and paste the following code in console:

````

mutation RetrieveTweetsFromTwitter {
  retrieveTweets(hashtag: "nodejs", tweetsToRetrieve: 10)
}

query LookupTweets {
  tweets {
    text,
    sentiment,
    author,
    published
  }
}

````

Pressing the play button, you can exec one of the commands:

- RetrieveTweetsFromTwitter: executes the described process
- LookupTweets: see the saved tweets with a registered sentiment

### Remarks

Just remember that this is a sample of a code with the DDD theory with some adaptations.

Feel free to contact me in case of any questions at danielbpdias at gmail dot com.
