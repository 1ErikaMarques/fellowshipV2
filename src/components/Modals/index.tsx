import {ReactNode} from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root')// por questao de acessibilidade 

interface ModalsProps {
    isOpen: boolean;
    onRequestClose: () => void;
    children: ReactNode; //tipando que os filhos do provider sao do tipo ReactNode=qualquer elemento do react
    customStyles?: {};
}

export function Modals({isOpen, children, onRequestClose, customStyles}: ModalsProps) {

    return (
        <Modal
            isOpen={isOpen}
            style={customStyles}
            onRequestClose={onRequestClose}>
              {children}
        </Modal>
    )
}
