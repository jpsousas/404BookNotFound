import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import BookForm from './book_form'
import { updateBook } from '../services/BookService' //arquivo q lida com o a api

interface EditBookProps {
    book: any
    isOpen: boolean
    closeHandler: CallableFunction
}

export function EditBookPopUp(props: EditBookProps) {
    const [name, setName] = useState(props.book.name)
    const [author, setAuthor] = useState(props.book.author)
    const [publication_year, setPublicationYear] = useState(props.book.publication_year)  

    const handleSubmit = async () => {
        try {
            await updateBook(props.book.id, name, author, publication_year )
            props.closeHandler()
        }catch (error) {
            console.log("Erro ao editar obra: ", error)
        }
    }

    return (
        <Modal isOpen={props.isOpen}>
            <ModalHeader>Edição de obra</ModalHeader>
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
                <button className='btn btn-primary' onClick={() => name && author && publication_year && updateBook(props.book.id,name,author,publication_year).then(()=> props.closeHandler()).then(()=>window.location.reload())}>Atualizar</button>
                <button className='btn btn-secondary' onClick={()=>props.closeHandler()}>Cancelar</button>
            </ModalFooter>
        </Modal>
    )
}

export default EditBookPopUp