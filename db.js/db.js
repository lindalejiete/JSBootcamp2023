import mysql from 'mysql'

const pool = mysql.createPool({
  host: 'hostname1',
  user: 'linda',
  password: '124',
  database: 'linda-db',
})

export default pool;

