export default {
  entities: ['./dist/**/entities/*.entity.js'],
  entitiesTs: ['./src/**/entities/*.entity.ts'],
  dbName: 'db.sqlite3',
  type: 'sqlite',
  debug: true,
  migrations: {
    path: './dist/migrations',
    pathTs: './src/migrations',
  },
};
