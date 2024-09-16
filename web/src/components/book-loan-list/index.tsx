import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { getBooks, getBook } from '../../services/BookService'
import { getLoans } from '../../services/LoanService'
import { EditBookPopUp } from '../book_edit_popup'
import { BookDeletePopUp } from '../book_delete_popup'
import LoanDeletePopUp from '../loan_delete_popup'
import LoanCreatePopUp from '../loan_create_popup'
import LoanEditPop, { EditLoanPopUp } from '../loan_edit_popup'
export function BooksList() {
  const [books, setBooks] = useState<any[]>([])
  useEffect(() => {
    getBooks().then(async (books) => {
      const booksArr = await Promise.all(books.map(async (book,index) => {
        return { ...book, avaliable: (await getBook(book.id)).avaliable};
      }));
      setBooks(booksArr);
    });
  }, []) 

  const [editingBookState, setEditingBook] = useState('');
  const [deletingBookState, setDeletingBook] = useState('');
  const [creatingLoanState, setCreatingLoan] = useState('');
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Empréstimo</th>
            <th>#</th>
            <th>Nome</th>
            <th>Autor</th>
            <th>Ano de publicação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
          books.map(function (book,index){ 
            const currentBook = {...books[index]}
            return (
              <tr key={book.id}>
                <td>
                { book.avaliable ? 
                  <button style={{ height: 'auto', width: 'auto',alignSelf: 'center', backgroundColor: '#005AFF', color: '#FFFFFF', border: 'none', padding: '15px' }} onClick={() => setCreatingLoan(book.id)}>
                    Empréstimo
                  </button>
                :''}
                </td>
                <td><small>{book.id}</small></td>
                <td>{book.name}</td>
                <td>{book.author}</td>
                <td>{book.publication_year}</td>
                <td>
                <button style={{ width: '50%', backgroundColor: '#FFA500', color: '#FFFFFF', border: 'none', padding: '10px' }} onClick={() => setEditingBook(book.id)}>
                  Editar
                </button>
                <button style={{ width: '50%', backgroundColor: '#FF0000', color: '#FFFFFF', border: 'none', padding: '10px' }} onClick={() => setDeletingBook(book.id)}>
                  Excluir
                  <LoanCreatePopUp key={'createLoan'+index} book={currentBook} isOpen={creatingLoanState == book.id} closeHandler={() => setCreatingLoan('')}/>
                  <BookDeletePopUp key={'deleteBook'+index} book={currentBook} isOpen={deletingBookState == book.id} closeHandler={() => setDeletingBook('')}/>
                  <EditBookPopUp key={'editBook'+index} book={currentBook} isOpen={editingBookState == book.id} closeHandler={() => setEditingBook('')}/>
                </button>
                
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  );
}

export function LoanList (){
  const [loans, setLoans] = useState<any[]>([])
  const [deletingLoanState, setDeletingLoan] = useState('')
  const [editingLoanState, setEditingLoan] = useState('')

  const fineCalculator = (loan: any) => {
    if(loan.status == 'extraviado'){
      return (
        <>
          ♾️
        </>
      )
    }
    if (loan.status == 'devolvido') {
      const returnDueDate = new Date(loan.return_due_date);
      const returnRealizedDate = new Date(loan.return_date)
      var diff =returnDueDate.getTime() - returnRealizedDate.getTime();
      var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      if(diffDays < -1){
        var multa = diffDays * -0.5;
        return 'R$ '+multa.toFixed(2);
      }else if(diffDays < 0){
        return '😡'
      }
     }
     return '--';
  }

  useEffect(() => {
    getLoans().then(async (loans) => {
      const loanArr = await Promise.all(loans.map(async (loan,index) => {
        return { ...loan, bookName: (await getBook(loan.bookId)).name}
      }));
      
      setLoans(loanArr);
    });
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Livro</th>
            <th>Data emprestimo</th>
            <th>Retorno previsto</th>
            <th>Retorno realizado</th>
            <th>Status</th>
            <th>Multa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {loans.map(loan => (
          <tr key={loan.id}>
            <td>{loan.id}</td>
            <td>{loan.bookName}</td>
            <td>{loan.loan_date}</td>
            <td>{loan.return_due_date}</td>
            <td>{loan.return_date}</td>
            <td>{loan.status}</td>
            <td>{fineCalculator(loan)}</td>
            <td>
            <button style={{ width: '50%', backgroundColor: '#FFA500', color: '#FFFFFF', border: 'none', padding: '10px' }} onClick={() => setEditingLoan(loan.id)}>
              Editar
            </button>
            <button style={{ width: '50%', backgroundColor: '#FF0000', color: '#FFFFFF', border: 'none', padding: '10px' }} onClick={() => setDeletingLoan(loan.id)}>
              Excluir
            </button>
            </td>
            <LoanDeletePopUp key={'deleteLoan'+loan.id} loan={loan} isOpen={deletingLoanState == loan.id} closeHandler={() => setDeletingLoan('')}/>
            <EditLoanPopUp key={'editLoan'+loan.id} loan={loan} isOpen={editingLoanState == loan.id} closeHandler={() => setEditingLoan('')}/>
          </tr>
          ))}
        </tbody>
      </Table>
    </>  
  )
}