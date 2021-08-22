import {Button} from '../../components/Button'
import {useModalsContext} from '../../hooks/useModals';
import {CloseButtonTW, Container, Content, Header, Message, PadlockImg, Title} from './styles';
import PadlockImgUrl from '../../assets/login/cadeado.svg';
import {Modals} from '../../components/Modals';
import theme from '../../styles/theme'
import {Input} from '../../components/Input';

const modalStyle = {
    content: {
        marginTop: '5%',
        marginLeft: '33%',
        bottom: 'auto',
        width: '311px',
        height: 'auto',
        backgroundColor: theme.colors.ice,
        borderRadius: '4px',
    }
}

export function ForgotPassword() {

    const {isModalOpen, handleOpenModal, handleCloseModal} = useModalsContext();

    function handleRecoveryPassword() {
        alert('test')
    }

    return (
        <Container>
            <h5 onClick={handleOpenModal}>Esqueceu a senha?</h5>
            <Modals isOpen={isModalOpen} onRequestClose={handleCloseModal} customStyles={modalStyle}>
                <Content>
                    <Header>
                        <PadlockImg src={PadlockImgUrl} alt="esqueceu a senha"/>
                        <CloseButtonTW onClick={handleCloseModal}>X</CloseButtonTW>
                    </Header>
                    <Title>Esqueceu a senha?</Title>
                    <Message>Após clicar em recuperar senha, você receberá as instruções por e-mail</Message>
                    <form onSubmit={handleRecoveryPassword}>
                        <Input type="email" required={true} labelTitle="E-mail"/>
                        <Button style={{width: '8.8rem', boxShadowLength: "9.8em",fontSize:'0.5rem'}} title="Recuperar senha"/>
                    </form>
                </Content>
            </Modals>
        </Container>
    );
}