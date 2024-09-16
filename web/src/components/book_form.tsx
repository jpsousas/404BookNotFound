import React, { useState } from 'react'

interface BookFormProps {
    name: string,
    author: string,
    publication_year: number,
    onSubmit: (book: any) => void
}

const BookForm: React.FC<BookFormProps> = (props) => {
    const [name, setName] = useState(props.name)
    const [author, setAuthor] = useState(props.author)
    const [publication_year, setPublicationYear] = useState(props.publication_year)

    const hanbdleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const book = { name, author, publication_year }
        props.onSubmit(book)
    }
    return (
        <form onSubmit={hanbdleSubmit}>
            <label>
                Título da obra:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Autor:
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </label>
            <label>
                Ano de publicação:
                <input type="number" value={publication_year} onChange={(e) => setPublicationYear(Number(e.target.value))} />
            </label>
        </form>
    )
}

export default BookForm