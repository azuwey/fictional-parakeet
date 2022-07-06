# Fictional-parakeet

Fictional-parakeet is a mock company search application with GraphQL, React and Typescript

## Installation

```bash
npm install
```

## Running the application

To run the application you first need to migrate the database running the following command:

```shell
# Migrate the database and fill it with generated data
npm run server:migrate:seed

# or without generated data
npm run server:migrate:up
```

After you migrated the database, you can use the following commands to build and then run the application in production
mode:

```shell
# Builds the front-end application
npm run client:build

# Builds the back-end application
npm run server:build

# Starts the application
npm run server:start:prod
```

Now you should be able to access it at `http://localhost:3000/`.

## Development

To run the development build you need to run the client and server application at the same time, but first you need to
migrate the database running the following command:

```shell
# Migrate the database and fill it with generated data
npm run server:migrate:seed

# or without generated data
npm run server:migrate:up
```

After that you can use the following commands to run both application in development mode:

```shell
# Starts the back-end application
npm run server:start:dev

# Starts the front-end application
npm run client:start:dev
```

Now you should be able to access the application at `http://localhost:3001`.
