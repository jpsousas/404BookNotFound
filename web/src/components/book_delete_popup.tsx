import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { deleteBook } from '../services/BookService'

interface Props {
    isOpen: boolean
    book: any
    closeHandler: CallableFunction
}

export function BookDeletePopUp (props: Props) {
    return (
        <>
            <Modal isOpen={props.isOpen}>
                <ModalHeader>Exclusão de livro</ModalHeader>
                <ModalBody>
                Você está prestes a excluir o livro: <br />
                <strong>{props.book.name}</strong><br /> de {props.book.author}<br />
                (Publicado em {props.book.publication_year})
                <br />
                Tem certeza que deseja excluir este livro?
                </ModalBody>
                <ModalFooter> 
                    
                    <button className='btn btn-danger' onClick={() => deleteBook(props.book.id).then(()=> props.closeHandler()).then(()=>window.location.reload())}>Excluir</button>
                    <button className='btn btn-secondary' onClick={()=>props.closeHandler()}>Cancelar</button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default BookDeletePopUp