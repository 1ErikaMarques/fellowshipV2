import {Avatar} from '@mui/material';
import React, {createRef, useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useParams} from 'react-router-dom';
import {useTheme} from 'styled-components';

import {BirthdayImg, CityImg, HobbiesImg, PhoneImg, RelationshipImg, WorkImg} from '../../components/Svgs';
import {api} from '../../services/api';

import {Button, Container, Content, HeaderProfile, ProfileInput, TextArea} from './styles';

enum profileButton {
    EDITAR = 'Editar',
    SALVAR = 'Salvar'
}

interface UserInfo {
    name?: string;
    profile_pic?: string;
}

interface UserDetails extends UserInfo {
    job?: string;
    city?: string;
    relationship?: string;
    birthdayDate?: string;
    hobbies?: string;
    contact?: string;
    about?: string;
}

export function Profile() {

    const [userDetails, setUserDetails] = useState<UserDetails>({} as UserDetails);
    const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);
    const [buttonText, setButtonText] = useState(profileButton.EDITAR);
    const [allowEditing, setAllowEditing] = useState(false);
    const { userId } = useParams<{ userId: string }>();

    // Criando referencia no formulario para disparar submit programaticamente.
    const formRef: React.RefObject<HTMLFormElement> = createRef();

    const { register, handleSubmit , setFocus } = useForm<UserDetails>();

    const theme = useTheme();

    /**
     * Salva as informacoes preenchidas no profile.
     * @param profileEvent dados dos usuario
     */
    async function handleSaveUserDetails(profileEvent: UserDetails) {

        await api.put('/user/update-profile"', {
            job: profileEvent.job,
            birthdayDate: profileEvent.birthdayDate,
            city: profileEvent.city,
            hobbies: profileEvent.hobbies,
            contact: profileEvent.contact,
            relationship: profileEvent.relationship,
            about: profileEvent.about
        });
    }

    //Carregando detalhes do profile do user ao abrir a pagina
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
                profile_pic: response.data.profile_pic

            })
        })

    }, [userId])


    /** Muda foto de perfil
     * 
     * 
    */
    const handleChangeProfilePic = () => {
        api.put('/user/profile_pic/update', {
            profile_url: ""
        })

    }

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
                        onChange={handleChangeProfilePic}
                    />
                    <Avatar
                        src={userInfo.profile_pic}
                        style={{ cursor: "pointer" }}
                    />
                </label>
                <h3>{userInfo.name}</h3>
                <Button
                    form={'profile'}
                    onClick={handleChangeButtonName}
                    type="button"
                    backgroundColor={allowEditing ? theme.colors.primary : theme.colors.gray_light}
                    color={allowEditing ? theme.colors.shape : theme.colors.gray_medium}>
                    {buttonText}
                </Button>
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