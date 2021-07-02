import { ReactNode, useState } from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root')// por questao de acessibilidade 

interface ModalsProps
{
  isOpen: boolean;
  onRequestClose: () => void;
  children: ReactNode; //tipando que os filhos do provider sao do tipo ReactNode=qualquer elemento do react  
}

export function Modals({ isOpen, children, onRequestClose }: ModalsProps)
{

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}>
      <div>{children}</div>
    </Modal>
  )
}
