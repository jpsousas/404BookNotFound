const Sequelize = require('sequelize')
const database = require('./db')
const Book = require('./book')

const Loan = database.define('loan', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    loan_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    return_due_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    return_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    status: { // valores: "emprestado", "devolvido", e "extraviado"
        type: Sequelize.STRING(50),
        allowNull: false
    }
})

module.exports = Loan