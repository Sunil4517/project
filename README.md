<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Creating a new NestJS Project

1. Run the following on a terminal
```bash
$ npm i -g @nestjs/cli
$ nest new [projectName]
$ npm install --save nest-knexjs knex mysql
```

2. Set up the `KnexModule` in `AppModule`
> import { Module } from '@nestjs/common';
> import { KnexModule } from 'nest-knexjs';
> 
> @Module ({
>    imports: [
>     KnexModule.forRoot({
>       config: {
>         client: 'postgresql',
>         version: '5.7',
>         useNullAsDefault: true,
>         connection: {
>           host: '127.0.0.1',
>           port: 5432,
>           user: 'test-db',
>           password: '',
>           database: 'test-user',
>         },
>       },
>     }),
>    ],
> })
> export class AppModule {}

3. Creating  `knexfile.js`

```
$ npx knex init
```

In the `knexfile.js` make the following changes for the develop environment

> module.exports = {
>   development: {
>     client: 'postgresql',
>     connection: {
>       host: '127.0.0.1',
>       port: 5432,
>       user: 'test-user',
>       password: '',
>       database: 'test-db',
>     },
>   },
> }

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Prerequisites for running the app

1. Docker must be up and running
2. pgAdmin must be set up with a database, username and password

## Creating MIGRATIONS and uploading them to database
```bash
$ npx knex migrate:make [name]

# Command to run the migrations
$ npx knex migrate:latest
```

## Creating local SEEDERS
```bash
$ npx knex seed:make users

# Command to run the seeder file
$ npx knex seed:run
```

## Creating an API
```bash
# module
$ nest g mo [apiName] 

# service
$ nest g s [apiName]  

# controller
$ nest g co [apiName]  
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
