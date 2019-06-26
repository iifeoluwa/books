'use strict'; 

module.exports = {
   db: {
    url: process.env.DB_URL,
    name: process.env.DB_NAME,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
   },
   server: {
       name: 'bibliotech',
       port: process.env.PORT || 3000
   }
}