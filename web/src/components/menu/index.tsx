import React, {useState} from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getBook, getBooks, setBook, updateBook, deleteBook } from '../../services/BookService'
import { getLoans, getLoan, setLoan, updateLoan, deleteLoan }  from '../../services/LoanService'
import { BookCreatePopUp }  from '../book_create_popup'
import { LoanCreatePopUp }  from '../loan_create_popup'
import { BooksList, LoanList } from '../book-loan-list'
export function Menu() {
  const [creatingBookState,setCreatingBook] = useState(false);
  const handleBookListClick = async () => {
    //listar livros
    const books = getBooks()
    console.log(books)
  }

  const handleLoanListClick = async () => {
    //listar emprestimos 
    const loans = await getLoans()
    console.log(loans)
  }

  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">404 Book Not Found</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Empréstimos" id="emprestimos-dropdown"> 
                <NavDropdown.Item href="/loan">Listagem</NavDropdown.Item>
                {/* <NavDropdown.Item href="#" onClick={()=>setCreatingLoan(true)}>Criação</NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown title="Livros" id="livros-dropdown">
                <NavDropdown.Item href="/">Listagem</NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={()=>setCreatingBook(true)}>Criação</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <BookCreatePopUp isOpen={creatingBookState} closeHandler={()=>setCreatingBook(false)}/>
    </>
  );
}
