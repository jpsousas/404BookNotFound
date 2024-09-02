import express from "express"

const API_PORT = 8080

const api = express()

api.get("/", (request, response) => {
    response.send("API is up")
})

api.get("/numbers", (request, response) => {
    response.json([1, 2, 3])
})

api.listen(API_PORT, "0.0.0.0", () => {
    console.log(`API running on port ${API_PORT}`)
})