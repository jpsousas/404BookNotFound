import express, { request, response } from "express"
import cors from "cors"
import { listBookLoans } from "./endpoints/listBookLoans"

const Book = require("book")
const Loan = require("loan")

const API_PORT = 8080

const api = express()

api.use(cors({
    origin: "*",
}))

api.get("/", (request, response) => {
    response.send("API is up")
})
api.get("/book-loans", listBookLoans)

api.listen(API_PORT, "0.0.0.0", () => {
    console.log(`API running on port ${API_PORT}`)
})

api.post("/",(request, response) => {
    //colocar requisição para post
    response.send("API is up")
})

api.put("/",(request, response) => {
    // colocar requisição para put
    response.send("API is up")
})

api.delete("/",(request, response) => {
    // colocar requisição para delete
    response.send("API is up")
})

Book.hasMany(Loan, {
    foreignKey: "book_id",
    onDelete: "CASCADE"
})

Loan.belongsTo(Book, {
    foreignKey: "book_id",
})

module.exports = {
    Book,
    Loan
}