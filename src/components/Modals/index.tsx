 import React, { ReactNode, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal' 


interface ModalsProps {
  children: ReactNode; //tipando que os filhos do provider sao do tipo ReactNode=qualquer elemento do react  
}

export function Modals(props: ModalsProps) {
    const [modalIsOpen, setIsOpen] = useState(false);

   function openModal() {
    setIsOpen(true);
  } 

  function closeModal() {
    setIsOpen(false);
  }
  return(
     <Modal
        isOpen={modalIsOpen}        
        onRequestClose={closeModal}        
         contentElement={
    (props, children) => <div {...props}>{children}</div>
   }
      ></Modal>
  )
}
 