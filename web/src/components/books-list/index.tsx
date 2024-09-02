import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Book, getBooks } from '../../services/BooksService';

export function BooksList() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    getBooks().then(setBooks)
  }, [])

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Autor</th>
            <th>Ano de publicação</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td></td>
          </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
