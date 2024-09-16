import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import  BookForm  from './book_form'
import { setBook } from '../services/BookService'

interface Props {
    isOpen: boolean;
    closeHandler: CallableFunction
}

export function BookCreatePopUp(props: Props) {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [publication_year, setPublicationYear] = useState(2024)
    return (
        <>
            <Modal isOpen={props.isOpen}>
                <ModalHeader >Cadastro de obra</ModalHeader>
                <ModalBody> 
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
                </ModalBody>
                <ModalFooter>
                    <button className='btn btn-primary' onClick={() => name && author && publication_year && setBook(name,author,publication_year).then(()=> props.closeHandler()).then(()=>window.location.reload())}>Cadastrar</button>
                    <button className='btn btn-secondary' onClick={()=>props.closeHandler()}>Cancelar</button>
                </ModalFooter>    
            </Modal>
        </>
    )
}