module.exports = {
  type: `mysql`,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: `root`,
  password: `1234`,
  database: `aa`,
  entities: [`dist/**/*.entity{.ts,.js}`],
  subscribers: [`dist/**/*.subscriber{.ts,.js}`],
  synchronize: false,
  migrationsRun: true,
  logging: true,
  logger: `file`,
  migrationsTableName: `migrations_typeorm`,
  migrations: [`dist/src/db/migrations/*{.ts,.js}`],
  cli: {
    migrationsDir: `src/db/migrations`,
  },
};
