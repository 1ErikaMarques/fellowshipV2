import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Avatar, Divider } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { CameraImg, VideoImg } from '../../components/Svgs';
import { Button } from '../../components/Button';

import { MediaPost } from '../../Screens/Feed/NewPost';

import { useTheme as useThemeStyledComponents } from 'styled-components';
import {
  Content,
  Header,
  CloseButtonTW,
  ContentChoiceHome,
  ButtonChoiceHome,
  Separador,
  UserInfo,
  ContentChoice,
  Icons,
} from './styles';
import { style } from '../ModalDefault';
import { useState } from 'react';


interface ModalHomeProps {
  isOpen: boolean;
  handleClose: () => void;
  handleAddPhotoPost: () => void;
  handleAddVideoPost: () => void;
  handleRemoveMedia: (itemId: string) => void;
  mediaPost: MediaPost[];
}


const ITEM_HEIGHT = 23;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 180,
    },
  },
};

const names = [
  'Casa',
  'Apartamento',
  'Flat',
  'Quarto',
  'Terreno',
  'Sitio',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export function ModalHome({ isOpen, handleClose, handleAddPhotoPost, handleAddVideoPost, handleRemoveMedia, mediaPost }: ModalHomeProps) {

  const themeStyled = useThemeStyledComponents();
  const theme = useTheme();

  const [isSell, setIsSell] = useState(false);
  const [isRent, setIsRent] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  function handleChoiceHome(choice: string) {
    if (choice === "isSell") {
      setIsSell(true)
      setIsRent(false)
      setIsSearch(false)

    } else if (choice === "isRent") {
      setIsRent(true)
      setIsSearch(false)
      setIsSell(false)
    } else {
      setIsSearch(true)
      setIsSell(false)
      setIsRent(false)
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Content>
          <Header>
            <CloseButtonTW onClick={handleClose}>X</CloseButtonTW>
            <h3>Criar publicação</h3>
            <Divider
              style={{
                backgroundColor: themeStyled.colors.gray_light,
                marginBottom: '2rem',
                marginTop: '1.2rem'
              }}
            />
          </Header>

          <ContentChoiceHome>
            <ButtonChoiceHome
              active={isSell}
              onClick={() => handleChoiceHome("isSell")}>
              Vender
            </ButtonChoiceHome>
            <Separador />
            <ButtonChoiceHome
              active={isRent}
              onClick={() => handleChoiceHome("isRent")}>
              Alugar
            </ButtonChoiceHome>
            <Separador />
            <ButtonChoiceHome
              active={isSearch}
              onClick={() => handleChoiceHome("isSearch")}>
              Procurar
            </ButtonChoiceHome>

          </ContentChoiceHome>

          <UserInfo>
            <Avatar
              sx={{
                width: '2.6rem',
                height: '2.6rem'
              }}
            />
            <h4>Mayk Fofilis</h4>
          </UserInfo>
          <TextareaAutosize
            maxRows={12}
            aria-label="maximum height"
            placeholder="Alugando, vendendo ou procurando propriedade?"
            defaultValue=""
            style={{
              width: 550,
              paddingBottom: 50,
              paddingRight: 10,
              outline: 'none',
              marginTop: '2rem',
              color: '#53525D',
              fontSize: '1.2rem',
            }}
          />
          <ImageList sx={{ width: 450, height: 'auto', marginTop: '0' }}>
            {mediaPost.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.mediaUrl}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.mediaUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                />
                <ImageListItemBar
                  position="top"
                  sx={{
                    background: 'transparent'
                  }}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(27, 27, 27, 0.94)' }}
                    >
                      <CancelRoundedIcon color="action"
                        onClick={() => handleRemoveMedia(item.id)} />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>

          <Divider style={{
            backgroundColor: '#F4F5F7',
            marginBottom: '2rem',
            marginTop: '4rem'
          }}
          />

          <Icons>
            <label htmlFor="contained-button-file">
              <input
                accept="image/*"
                id="contained-button-file"
                multiple type="file"
                style={{ display: 'none' }}
                onChange={handleAddPhotoPost}
              />
              <CameraImg />
            </label>
            <label htmlFor="contained-button-file">
              <input
                accept="image/*"
                id="contained-button-file"
                multiple type="file"
                style={{ display: 'none' }}
                onChange={handleAddVideoPost}
              />
              <VideoImg />
            </label>
          </Icons>

          <ContentChoice>
            <div >
              <FormControl sx={{ m: 0, width: 180, mt: 0, margin: 'none' }} size='small'  >
                <Select
                  multiple
                  displayEmpty
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Tipo do Imovel</em>;
                    }

                    return selected.join(', ');
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem disabled value="">

                  </MenuItem>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <TextField
              id="adornment-amount"
              placeholder=" Insira o valor"
              multiline
              sx={{ m: 0, width: 180, mt: 0 }} size='small'
            />
          </ContentChoice>
          <Button
            title="Publicar"
            onClick={() => {
            }}
            style={{
              height: '3.5rem',
              width: '16rem',
              backgroundColor: themeStyled.colors.primary,
              fontSize: '1rem',
              color: themeStyled.colors.ice
            }}
          />

        </Content>
      </Box>
    </Modal>
  )
}