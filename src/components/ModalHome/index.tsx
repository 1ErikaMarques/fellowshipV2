import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Avatar, CardMedia, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Theme, useTheme } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import * as React from 'react';
import { useState } from 'react';
import { useTheme as useThemeStyledComponents } from 'styled-components';

import { useAuth } from '../../hooks/AuthContext';
import { Button } from '../Button';
import { ModalProps, style } from '../ModalDefault';

import { CameraImg, VideoImg } from '../Svgs';
import {
    ButtonChoiceHome,
    CloseButtonTW,
    Content,
    ContentChoice,
    ContentChoiceHome,
    Header,
    Icons,
    Separador,
    UserInfo,
} from './styles';

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
            personName.indexOf (name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export function ModalHome({
                              isOpen,
                              handleClose,
                              handleMediaToPost,
                              handleRemoveMedia,
                              mediaPost,
                              isMediaSelected,
                              handleCreatePost,
                              postType
                          }: ModalProps) {

    const themeStyled = useThemeStyledComponents ();
    const theme = useTheme ();
    const {userInfo} = useAuth ();
    const [isSell, setIsSell] = useState (false);
    const [isRent, setIsRent] = useState (false);
    const [isSearch, setIsSearch] = useState (false);
    const [propertyType, setPropertyType] = useState<string[]> ([]);
    const [propertyPrice, setPropertyPrice] = useState<number> (0);
    const [text, setText] = useState<string> ('');
    const [tag, setTag] = useState<string> ('');


    const handleChangePropertyType = (event: SelectChangeEvent<typeof propertyType>) => {
        const {
            target: {value},
        } = event;
        setPropertyType (
            typeof value === 'string' ? value.split (',') : value,
        );
    };

    function handleChoiceHome(choice: string) {
        if (choice === 'isSell') {
            setIsSell (true);
            setIsRent (false);
            setIsSearch (false);
            setTag ('Vender');

        } else if (choice === 'isRent') {

            setIsRent (true);
            setIsSearch (false);
            setIsSell (false);
            setTag ('Alugar');

        } else {
            setIsSearch (true);
            setIsSell (false);
            setIsRent (false);
            setTag ('Procurar');
        }
    }

    const resetModalValues = () => {
        setIsSearch (false);
        setIsSell (false);
        setIsRent (false);
        setText ('');
        handleClose ();
        setPropertyType([])
    }

    const handleSubmit = async () => {
        await handleCreatePost ({
            name: userInfo.user.name,
            userId: userInfo.user.userId,
            profilePic: userInfo.user.profilePic,
            postType: postType,
            postLocalization: userInfo.user.postalCode,
            createdAt: new Date ().getTime (),
            text: text,
            tag: tag,
            propertyType: propertyType.join (', '),
            propertyPrice: propertyPrice,
            mediaPosts: mediaPost,
            comments: []
        }).then (() => {
            resetModalValues();
        });
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
                        <hr
                            style={{
                                backgroundColor: themeStyled.colors.gray_light,
                                marginBottom: '1rem',
                                marginTop: '0.5rem'
                            }}
                        />
                    </Header>

                    <ContentChoiceHome>
                        <ButtonChoiceHome
                            active={isSell}
                            onClick={() => handleChoiceHome ('isSell')}>
                            Vender
                        </ButtonChoiceHome>
                        <Separador/>
                        <ButtonChoiceHome
                            active={isRent}
                            onClick={() => handleChoiceHome ('isRent')}>
                            Alugar
                        </ButtonChoiceHome>
                        <Separador/>
                        <ButtonChoiceHome
                            active={isSearch}
                            onClick={() => handleChoiceHome ('isSearch')}>
                            Procurar
                        </ButtonChoiceHome>

                    </ContentChoiceHome>

                    <UserInfo>
                        <Avatar
                            src={userInfo.user.profilePic}
                            sx={{
                                width: '2.6rem',
                                height: '2.6rem'
                            }}
                        />
                        <h4>{userInfo.user.name}</h4>
                    </UserInfo>
                    <TextareaAutosize
                        maxRows={12}
                        aria-label="maximum height"
                        placeholder="Alugando, vendendo ou procurando propriedade?"
                        defaultValue=""
                        onChange={(event => setText (event.target.value))}
                        style={{
                            width: 450,
                            paddingBottom: 15,
                            paddingRight: 10,
                            outline: 'none',
                            marginTop: '1.5rem',
                            color: '#53525D',
                            fontSize: '1.1rem',
                        }}
                    />
                    {isMediaSelected &&
                    <ImageList sx={{width: 450, height: 'auto', marginTop: '0'}}>
                        {mediaPost.map ((item) => (
                            <ImageListItem key={item.mediaUrl}>
                                {item.mediaType.startsWith ('video') ?
                                    <CardMedia
                                        component={'video'}
                                        height="140"
                                        src={item.mediaUrl}
                                        controls
                                    /> :
                                    <CardMedia
                                        component={'img'}
                                        height="140"
                                        src={item.mediaUrl}
                                    />
                                }
                                <ImageListItemBar
                                    position="top"
                                    sx={{
                                        background: 'transparent'
                                    }}
                                    actionIcon={
                                        <IconButton
                                            sx={{color: 'rgba(27, 27, 27, 0.94)'}}
                                        >
                                            <CancelRoundedIcon color="action"
                                                               onClick={() => handleRemoveMedia (item.mediaUrl)}/>
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    }

                    <Icons>
                        <label htmlFor="contained-image-button-file">
                            <input
                                accept="image/*"
                                id="contained-image-button-file"
                                multiple type="file"
                                style={{display: 'none'}}
                                onChange={(event) => handleMediaToPost (event)}
                            />
                            <CameraImg/>
                        </label>
                        <label htmlFor="contained-video-button-file">
                            <input
                                accept="video/mp4,video/x-m4v,video/*"
                                id="contained-video-button-file"
                                multiple type="file"
                                style={{display: 'none'}}
                                onChange={(event) => handleMediaToPost (event)}
                            />
                            <VideoImg/>
                        </label>
                    </Icons>

                    <ContentChoice>
                        <div>
                            <FormControl sx={{m: 0, width: 180, mt: 0, margin: 'none'}} size="small">
                                <Select
                                    multiple
                                    displayEmpty
                                    value={propertyType}
                                    onChange={handleChangePropertyType}
                                    input={<OutlinedInput/>}
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <em>Tipo do Imovel</em>;
                                        }

                                        return selected.join (', ');
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{'aria-label': 'Without label'}}
                                >
                                    <MenuItem disabled value="">

                                    </MenuItem>
                                    {names.map ((name) => (
                                        <MenuItem
                                            key={name}
                                            value={name}
                                            style={getStyles (name, propertyType, theme)}
                                        >
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <OutlinedInput
                            id="outlined-adornment-amount"
                            type={'number'}
                            onChange={(event => {
                                setPropertyPrice (Number.parseFloat (event.target.value));
                            })}
                            placeholder=" Insira o valor"
                            sx={{m: 0, width: 180, mt: 0}} size="small"
                            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                        />
                    </ContentChoice>
                    <Button
                        title="Publicar"
                        onClick={handleSubmit}
                        style={{
                            height: '3rem',
                            width: '16rem',
                            backgroundColor: themeStyled.colors.primary,
                            fontSize: '1rem',
                            color: themeStyled.colors.ice
                        }}
                    />

                </Content>
            </Box>
        </Modal>
    );
}