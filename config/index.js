'use strict'; 

module.exports = {
   db: {
    url: process.env.DB_URL || 'postgres://gotywpuf:N7tNsOAgvsa6b7HzYTg3mg_6Qh152jZ-@balarama.db.elephantsql.com:5432/gotywpuf ',
    name: process.env.DB_NAME,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
   },
   server: {
       name: 'bibliotech',
       port: process.env.PORT || 3000,
       jwt_key: process.env.SECRET_KEY || '1kdjhd@983938!djsdhjshdfj0'
   }
}