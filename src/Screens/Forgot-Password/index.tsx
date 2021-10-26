import { useState } from 'react';
import PadlockImgUrl from '../../assets/login/cadeado.svg';

import { Modals } from '../../components/Modals';
import { Button } from '../../components/Button'

import theme from '../../styles/theme'

import {
    CloseButtonTW,
    Container,
    Content,
    Header,
    Message,
    PadlockImg,
    Title,
    InputEmail,
    LabelEmail
} from './styles';


const modalStyle = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        marginTop: '8%',
        marginLeft: '35%',
        bottom: 'auto',
        width: '22rem',
        height: 'auto',
        backgroundColor: theme.colors.ice,
        borderRadius: '0.25rem',
        border: 'none',
        position: 'fixed'
    }
}

export function ForgotPassword() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    function handleRecoveryPassword() {
        alert('test')
    }

    return (
        <Container>
            <h5 onClick={handleOpenModal}>Esqueceu a senha?</h5>
            <Modals isOpen={isModalOpen} onRequestClose={handleCloseModal} customStyles={modalStyle}>
                <Content>
                    <Header>
                        <PadlockImg src={PadlockImgUrl} alt="esqueceu a senha" />
                        <CloseButtonTW onClick={handleCloseModal}>X</CloseButtonTW>
                    </Header>
                    <Title>Esqueceu a senha?</Title>
                    <Message>Após clicar em recuperar senha, você receberá as instruções por e-mail</Message>
                    <form onSubmit={handleRecoveryPassword}>
                        <InputEmail
                            type="email"
                            name="email"
                            required
                        />
                        <LabelEmail>Email</LabelEmail>
                        <Button
                            style={{ width: "10rem", boxShadowLength: "9.8em", marginBottom: "4rem" }}
                            title="Recuperar senha"
                        />
                    </form>
                </Content>
            </Modals>
        </Container>
    );
}