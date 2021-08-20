import {Input} from '../../components/Input';
import {Modals} from '../../components/Modals'
import {useModalsContext} from '../../hooks/useModals';
import {Container} from './styles';

export function ForgotPassword() {

    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
        },
    }

    const {isModalOpen, handleOpenModal, handleCloseModal} = useModalsContext();

    return (
        <Container>
            <h5 onClick={handleOpenModal}>Esqueceu a senha?</h5>
            <Modals isOpen={isModalOpen} onRequestClose={handleCloseModal} customStyles={modalStyle}>
                <button onClick={handleCloseModal}>X</button>
                <Input
                    type="email"
                    name="email"
                    required={true}
                    labelTitle="Email"/>
            </Modals>
        </Container>
    );
}