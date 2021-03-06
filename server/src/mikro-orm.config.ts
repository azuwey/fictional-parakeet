export default {
  entities: ['./dist/**/entities/*.entity.js'],
  entitiesTs: ['./src/**/entities/*.entity.ts'],
  dbName: 'db.sqlite3',
  type: 'sqlite',
  migrations: {
    path: './dist/migrations',
    pathTs: './src/migrations',
  },
  seeder: {
    path: './dist/seeder',
    pathTs: './src/seeder',
  },
};
