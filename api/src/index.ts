import express from "express"
import cors from "cors"
import { listLending } from "./endpoints/listLending"

const API_PORT = 8080

const api = express()

api.use(cors({
    origin: "*",
}))

api.get("/", (request, response) => {
    response.send("API is up")
})
api.get("/lendings", listLending)

api.listen(API_PORT, "0.0.0.0", () => {
    console.log(`API running on port ${API_PORT}`)
})