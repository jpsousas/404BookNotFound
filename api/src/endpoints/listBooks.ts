import { Request, Response } from "express";

interface Book {
    id: string;
    name: string;
    author: string;
    publicationYear: string;
}

export const listBooks = (request: Request, response: Response) => {
    const books: Book[] = [
        {
            id: "cf93597d",
            name: "Código Limpo (Clean Code)",
            author: "Robert Cecil Martin",
            publicationYear: "2012",
        }
    ]
    response.json(books)
}