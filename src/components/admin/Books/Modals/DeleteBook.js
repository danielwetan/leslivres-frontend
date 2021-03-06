import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import axios from 'axios';

const DeleteBookModal = props => {
  const [deleteModal, setDeleteModal] = useState(false);
  const toggle = () => setDeleteModal(!deleteModal);

  const deleteBook = () => {
    axios({
      method: 'DELETE',
      url: process.env.REACT_APP_API_URL + `book/${props.id}`
    })
    .then(() => {
      window.location.replace(process.env.REACT_APP_PUBLIC_URL + 'admin');
    })
    .catch((err) => {
      console.log(err.response);
    })
  }

  return(
    <>
      <span onClick={toggle} className="book-edit btn bg-white"><i class="fas fa-trash"></i></span>
      {/****************/}
      <Modal isOpen={deleteModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete Book</ModalHeader>
        <ModalBody>
          Are you sure to delete this?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteBook} className="btn-blue">Delete</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default DeleteBookModal