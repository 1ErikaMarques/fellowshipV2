import Menu from '@mui/material/Menu';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import React, {ChangeEvent, createRef, useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Avatar } from '@mui/material';
import {useAuth} from '../../hooks/AuthContext';

import { api } from '../../services/api';
import {
    BirthdayImg,
    CityImg,
    HobbiesImg,
    PhoneImg,
    RelationshipImg,
    WorkImg
} from '../../components/Svgs';
import {storage} from '../../services/firebase';

import {
    Button,
    Container,
    Content,
    HeaderProfile,
    ProfileInput,
    TextArea
} from './styles';

enum profileButton {
    EDITAR = 'Editar',
    SALVAR = 'Salvar'
}

interface UserInfo {
    name?: string;
    profilePic?: string;
}

export interface UserDetails extends UserInfo {
    job?: string;
    city?: string;
    relationship?: string;
    birthdayDate?: string;
    hobbies?: string;
    contact?: string;
    about?: string;
    neighbourhood?: string;
}

export function Profile() {

    const [userDetails, setUserDetails] = useState<UserDetails>({} as UserDetails);
    const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);
    const [buttonText, setButtonText] = useState(profileButton.EDITAR);
    const [allowEditing, setAllowEditing] = useState(false);

    const { userId } = useParams<{ userId: string }>();
    const {updateUserInfo} = useAuth();
    const theme = useTheme();
    const {userInfo: owner} = useAuth();

    // Criando referencia no formulario para disparar submit programaticamente.
    const formRef: React.RefObject<HTMLFormElement> = createRef();

    const { register, handleSubmit, setFocus } = useForm<UserDetails>();



    /**
     * Salva as informacoes preenchidas no profile.
     * @param profileEvent dados dos usuario
     */
    async function handleSaveUserDetails(profileEvent: UserDetails) {

        await api.put<UserDetails>('/user/update_profile', {
            job: profileEvent.job,
            birthdayDate: profileEvent.birthdayDate,
            city: profileEvent.city,
            hobbies: profileEvent.hobbies,
            contact: profileEvent.contact,
            relationship: profileEvent.relationship,
            about: profileEvent.about
        }).then(response => {
            setUserDetails({
                job: response.data.job,
                birthdayDate: response.data.birthdayDate,
                city: response.data.city,
                hobbies: response.data.hobbies,
                contact: response.data.contact,
                relationship: response.data.relationship,
                about: response.data.about
            });
        });
    }

    //Carregando dados do profile do user ao abrir a pagina
    useEffect(() => {
        api.get<UserDetails>(`/user/${userId}`, {
            params: {
                user_id: userId
            }
        }).then(response => {
            setUserDetails({
                job: response.data.job,
                birthdayDate: response.data.birthdayDate,
                city: response.data.city,
                hobbies: response.data.hobbies,
                contact: response.data.contact,
                relationship: response.data.relationship,
                about: response.data.about
            });

            setUserInfo({
                name: response.data.name,
                profilePic: response.data.profilePic
            })
        })

    }, [userId])


    /**
     * Muda foto de perfil
     * 
    */
    const handleChangeProfilePic = async (inputFile: ChangeEvent<HTMLInputElement>) => {

        const file = inputFile.target.files;
        // Valida se existe uma foto a ser carregada
        if (file !== null) {
            // Cria a referencia do storage do firebase utilizando o id do usuario , assim nao precisa deletar a antiga foto caso o usuario troque de foto
            const storagePostsRef = ref (storage, userId);
            uploadBytes (storagePostsRef, file[0]).then (async () => {
                // Apos o upload da foto , efetua o download da image como URL
                await getDownloadURL (storagePostsRef).then (async upload => {
                    // Envia a URL publica da image para o backend
                    await api.put<UserInfo>('/user/profile_pic/update', {
                        profilePic: upload
                    }).then (() => {
                        // Atualiza o contexto para pode utilizar a foto do perfil em outros components
                        updateUserInfo ({
                            profilePic: upload
                        });
                        setUserInfo ({
                            profilePic: upload
                        });
                    });
                });

            });
        }
    };

    /**
     * Altera texto do botao e libera/bloqueia os inputs.
     *
     */
    const handleChangeButtonName = () => {

        if (allowEditing) {
            setButtonText(profileButton.EDITAR);
            setAllowEditing(false);

            // Fazendo submit do formulario programaticamente , para evitar que o submit seja feito ao alterar o nome.
            formRef.current?.dispatchEvent(
                new Event('submit', { bubbles: true, cancelable: true })
            );

        } else {
            setButtonText(profileButton.SALVAR);
            setAllowEditing(true);
            setFocus("job")
        }
    };

    return (
        <Container>
            <HeaderProfile>
                <label htmlFor="contained-button-file">
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple type="file"
                        style={{ display: "none" }}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => handleChangeProfilePic(event)}
                    />
                    <Avatar
                        src={userInfo.profilePic}
                        style={{ cursor: "pointer" }}
                    />
                </label>
                <h3>{userInfo.name}</h3>

                {owner.user.userId === userId &&
                <Button
                    form={'profile'}
                    onClick={handleChangeButtonName}
                    type="button"
                    backgroundColor={allowEditing ? theme.colors.primary : theme.colors.gray_light}
                    color={allowEditing ? theme.colors.shape : theme.colors.gray_medium}>
                    {buttonText}
                </Button>
                }
            </HeaderProfile>


            <form id={'profile'} onSubmit={handleSubmit(handleSaveUserDetails)} ref={formRef}>
                <Content>
                    <WorkImg
                        fill={userDetails.job ? theme.colors.shape : theme.colors.gray_medium}
                        stroke={userDetails.job ? theme.colors.primary : theme.colors.gray_medium}

                    />
                    <ProfileInput
                        {...register('job')}
                        defaultValue={userDetails.job}
                        readOnly={!allowEditing}
                    />

                    <CityImg
                        fill={userDetails.city ? theme.colors.shape : theme.colors.gray_light}
                        stroke={userDetails.city ? theme.colors.green : theme.colors.gray_medium}
                    />
                    <ProfileInput
                        {...register('city')}
                        defaultValue={userDetails.city}
                        disabled={!allowEditing}
                    />

                    <RelationshipImg
                        fill={userDetails.relationship ? theme.colors.shape : theme.colors.gray_light}
                        stroke={userDetails.relationship ? theme.colors.pink : theme.colors.gray_medium}
                    />
                    <ProfileInput
                        {...register('relationship')}
                        defaultValue={userDetails.relationship}
                        disabled={!allowEditing}
                    />

                    <BirthdayImg
                        fill={userDetails.birthdayDate ? theme.colors.shape : theme.colors.gray_light}
                        stroke={userDetails.birthdayDate ? theme.colors.red : theme.colors.gray_medium}
                    />
                    <ProfileInput
                        {...register('birthdayDate')}
                        type={'date'}
                        defaultValue={userDetails.birthdayDate}
                        disabled={!allowEditing}
                    />

                    <HobbiesImg
                        stroke={userDetails.hobbies ? theme.colors.primary : theme.colors.gray_medium}
                    />
                    <ProfileInput
                        {...register('hobbies')}
                        defaultValue={userDetails.hobbies}
                        disabled={!allowEditing}
                    />

                    <PhoneImg
                        fill={userDetails.contact ? theme.colors.shape : theme.colors.gray_light}
                        stroke={userDetails.contact ? theme.colors.yellow : theme.colors.gray_medium}
                    />
                    <ProfileInput
                        {...register('contact')}
                        defaultValue={userDetails.contact}
                        disabled={!allowEditing}
                        maxLength={12}
                    />

                    <TextArea
                        {...register('about')}
                        placeholder="Seus vizinhos querem te conhecer, conte aqui algo sobre você."
                        defaultValue={userDetails.about}
                        disabled={!allowEditing}
                    />

                </Content>
            </form>

        </Container>
    );
}