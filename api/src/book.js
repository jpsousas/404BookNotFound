const Sequelize = require('sequelize')
const database = require('./db')

const Book = database.define('book', {
    id: {
        type: Sequelize.UUIDV4,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    author: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    publication_year: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
module.exports = Book