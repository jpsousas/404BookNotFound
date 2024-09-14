import { Sequelize } from '@sequelize/core'
import { PostgresDialect } from '@sequelize/postgres'

const sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: 'bd_404nbf',
    user: 'admin',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    ssl: true,
    clientMinMessages: 'notice',
})

module.exports = sequelize