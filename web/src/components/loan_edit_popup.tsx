import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { updateLoan } from '../services/LoanService'
import LoanForm from './loan_form'

interface EditLoanProps {
    loan: any
    isOpen: boolean
    closeHandler: CallableFunction
}

export function EditLoanPopUp (props: EditLoanProps) {
    const [loan_date, setLoanDate] = useState(props.loan.loan_date)
    const [return_date, setReturnDate] = useState(props.loan.return_date ?? '')
    const [status, setStatus] = useState(props.loan.status)
    return (
        <Modal isOpen={props.isOpen}>
            <ModalHeader>Edição de empréstimo</ModalHeader>
            <ModalBody>
                <label>
                    Nome do Livro: {props.loan.bookName}
                </label>
                <br/>
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
                { status=='devolvido' ? 
                    <label>
                        Data de devolução:
                        <input type="date" value={return_date} onChange={(e) => setReturnDate(e.target.value)} />
                    </label>
                    :''
                }

            </ModalBody>
            <ModalFooter>
                <button className='btn btn-primary' onClick={() => loan_date && status && updateLoan(props.loan.id,loan_date,status,return_date).then(()=> props.closeHandler()).then(()=>window.location.reload())}>Atualizar</button>
                <button className='btn btn-secondary' onClick={()=>props.closeHandler()}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )
}

export default EditLoanPopUp