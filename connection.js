import mysql from 'mysql2/promise'


const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '09019880',
  database: 'eu'
})


export { connection }