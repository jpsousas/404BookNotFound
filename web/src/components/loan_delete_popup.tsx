import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { deleteLoan } from '../services/LoanService'
import {getBook} from '../services/BookService'
interface Props {
    isOpen: boolean
    loan: any
    closeHandler: CallableFunction
}

export function LoanDeletePopUp (props: Props) {

    return (
        <>
            <Modal isOpen={props.isOpen}>
                <ModalHeader>Exclusão de empréstimo</ModalHeader>
                <ModalBody>
                Você está prestes a excluir o empréstimo: <br />
                <strong>
                    Livro: {props.loan.bookName} <br />
                    Data de empréstimo: {props.loan.loan_date} <br />
                    Data de retorno prevista: {props.loan.return_date} <br />
                    Status: {props.loan.status}<br />
                </strong><br />
                <br />
                    Tem certeza que deseja excluir este empréstimo?
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-danger' onClick={() => deleteLoan(props.loan.id).then(()=> props.closeHandler()).then(()=>window.location.reload())}>Excluir</button>
                    <button className='btn btn-secondary' onClick={()=>props.closeHandler()}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default LoanDeletePopUp