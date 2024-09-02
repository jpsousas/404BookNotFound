import { Api } from "./Api";

export interface Book {
    id: string;
    name: string;
    author: string;
    publicationYear: string;
}

export async function getBooks(): Promise<Book[]>{
    const {data} = await Api.get("/books")
    return data
}