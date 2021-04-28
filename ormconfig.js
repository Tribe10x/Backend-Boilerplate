const {
   TYPEORM_DBHANDLER,
   TYPEORM_HOST,
   TYPEORM_USERNAME,
   TYPEORM_PASSWORD,
   TYPEORM_DATABASE,
   TYPEORM_PORT,
} = process.env;

module.exports = {
   type: TYPEORM_DBHANDLER,
   host: TYPEORM_HOST,
   port: TYPEORM_PORT,
   username: TYPEORM_USERNAME,
   password: TYPEORM_PASSWORD,
   database: TYPEORM_DATABASE,
   synchronize: true,
   logging: false,
   entities: [
      "src/entity/**/*.ts"
   ],
   migrations: [
      "src/migration/**/*.ts"
   ],
   subscribers: [
      "src/subscriber/**/*.ts"
   ],
   cli: {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   },
};