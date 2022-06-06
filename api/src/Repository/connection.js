import mysql from 'mysql2/promise'

const conexao = await mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PDW,
    database:process.env.MYSQL_DB
})

console.log('Banco de dados conectada com sucesso')

export { conexao }


