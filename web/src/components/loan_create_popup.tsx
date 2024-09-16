import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import  LoanForm  from './loan_form'
import { setLoan } from '../services/LoanService' 

interface Props {
    isOpen: boolean
    closeHandler: CallableFunction
    book: any
}

export function LoanCreatePopUp (props: Props) {
    const [loan_date, setLoanDate] = useState('');
    
    const DefaultLoanDate = new Date().toDateString()
    return (
        <Modal isOpen={props.isOpen}>
            <ModalHeader>Cadastro de empréstimo</ModalHeader>
            <ModalBody>
                <label>
                    Titulo do Livro: {props.book.name}
                </label>
                <br/>
                <label>
                    Data de empréstimo:
                    <input type="date" value={loan_date} onChange={(e) => setLoanDate(e.target.value)} />
                </label>
                <label>
                    Status do emprestimo: 'emprestado'
                </label>
            </ModalBody>
            <ModalFooter>
            <button className='btn btn-primary' onClick={() => loan_date && setLoan(props.book.id,loan_date,'emprestado').then(()=> props.closeHandler()).then(()=>window.location.reload())}>Cadastrar</button>
            <button className='btn btn-secondary' onClick={()=>props.closeHandler()}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )
}

export default LoanCreatePopUp