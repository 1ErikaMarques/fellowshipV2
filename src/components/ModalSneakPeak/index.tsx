import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import { generatePath, Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { ROUTES } from '../../routes';
import theme from '../../styles/theme';
import { style } from '../ModalDefault';
import { CloseButtonTW, Content, Header } from '../ModalDefault/styles';
import { ActionButtonSneakPeak, TextSneakPeak } from './style';

interface ModalProps {
  isOpen: boolean;
  handleCloseSneakPeak: () => void;
  postalCode: string;
  neighbourhood: string;
}

export interface SneakPeakPros {
  postalCode: string;
  neighbourhood: string;
}

export function ModalSneakPeak({ isOpen, handleCloseSneakPeak, postalCode, neighbourhood }: ModalProps) {

  const { updateUserInfo, userInfo } = useAuth();
  const history = useHistory()

  const handleSneakPeak = () => {
    sessionStorage.setItem('sneakPeak', JSON.stringify({
      postalCode: userInfo.user.postalCode,
      neighbourhood: userInfo.user.neighbourhood,
    }));

    updateUserInfo({
      postalCode: postalCode,
      neighbourhood: neighbourhood,
      sneakPeak: true
    });
    handleCloseSneakPeak();
    history.go(0)
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleCloseSneakPeak}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style} component={'div'}>
        <Content>
          <Header>
            <CloseButtonTW onClick={handleCloseSneakPeak}>X</CloseButtonTW>
            <hr
              style={{
                backgroundColor: theme.colors.gray_light,
                marginBottom: '1rem',
                marginTop: '0.5rem'
              }}
            />
          </Header>
          <TextSneakPeak style={{marginBottom: '2rem'}}>
            <b>Fala Vizinho,</b>
            vimos que você não mora nesse bairro, caso tenha se mudado recentemente {'\n'}
            <Link to={generatePath(ROUTES.CONFIGURATIONS)} onClick={handleCloseSneakPeak}>
              <ActionButtonSneakPeak> Clique aqui.  </ActionButtonSneakPeak>
            </Link>
            <br/>Está curioso sobre o que está acontecendo nesse bairro? Você pode dar uma <ActionButtonSneakPeak onClick={handleSneakPeak}>Espiadinha</ActionButtonSneakPeak>
            , a gente promete não contar pra ninguém. 🤭 🤐 😇 😜
          </TextSneakPeak>
        </Content>
      </Box>
    </Modal>
  );
}