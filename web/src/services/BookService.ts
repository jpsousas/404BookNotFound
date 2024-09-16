import { UUID } from "crypto";
import { Api } from "./Api";


export async function getBooks(): Promise<any[]>{
    const {data} = await Api.get("/books")
    return data
}

export async function getBook(book_id: UUID): Promise<any>{
    const {data} = await Api.get("/books/"+book_id)
    return data
}

export async function setBook(book_name: String, author: String, publication_year: Number): Promise<any[]>{
    const request = {name: book_name,author,publication_year}
    const {data} = await Api.post("/books", request)
    return data
}

export async function updateBook(book_id: UUID, book_name: String, author: String, publication_year: Number): Promise<any[]>{
    const request = {name: book_name,author,publication_year}
    const {data} = await Api.put("/books/"+book_id, request)
    return data
}

export async function deleteBook(book_id: UUID): Promise<any[]>{
    const {data} = await Api.delete("/books/"+book_id)
    return data
}
