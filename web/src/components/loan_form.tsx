import React, { useState } from 'react';

interface LoanFormProps {
  book_id: string
  loan_date: string
  status: string
  onSubmit: (loan: any) => void
}

const LoanForm: React.FC<LoanFormProps> = (props) => {
  const [book_id, setBookId] = useState(props.book_id);
  const [loan_date, setLoanDate] = useState(props.loan_date);
  const [status, setStatus] = useState(props.status);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loan = { book_id, loan_date };
    props.onSubmit(loan);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID do Livro:
        <input type="text" value={book_id} onChange={(e) => setBookId(e.target.value)} />
      </label>
      <label>
        Data de empréstimo:
        <input type="date" value={loan_date} onChange={(e) => setLoanDate(e.target.value)} />
      </label>
      <label>
        Status do emprestimo:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="emprestado">Emprestado</option>
          <option value="devolvido">Devolvido</option>
          <option value="extraviado">Extraviado</option>
        </select>
      </label>
    </form>
  )
}

export default LoanForm