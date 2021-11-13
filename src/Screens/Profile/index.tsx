import React, {createRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useParams} from 'react-router-dom';

import {
    CityImg,
    RelationshipImg,
    WorkImg,
    BirthdayImg,
    HobbiesImg,
    PhoneImg
} from '../../components/Svgs';
import {AuthState} from '../../hooks/AuthContext';

import {
    Button,
    Container,
    Content,
    Input,
    TextArea,
    HeaderProfile
} from './styles'
import { useTheme } from 'styled-components';
import { api } from '../../services/api';

enum profileButton {
    EDITAR = 'Editar',
    SALVAR = 'Salvar'
}

interface userInfo {
    name: string;
    profile_pic: string;
}

interface userDetails {
    work?: string;
    city?: string;
    relationship?: string;
    birthday?: string;
    hobbies?: string;
    phone?: string;
    about?: string;
}

export function Profile() {

    const [userDetails, setUserDetails] = useState<userDetails> ({} as userDetails);
    const [userInfo, setUserInfo] = useState<userInfo> ({} as userInfo);
    const [buttonText, setButtonText] = useState (profileButton.EDITAR);
    const [allowEditing, setAllowEditing] = useState (false);
    const {userId} = useParams<{ userId: string }> ();

    // Criando referencia no formulario para disparar submit programaticamente.
    const formRef: React.RefObject<HTMLFormElement> = createRef ();

    const {register, handleSubmit} = useForm<userDetails> ();

    const theme = useTheme ();

    /**
     * Salva as informacoes preenchidas no profile.
     * @param profileEvent dados dos usuario
     */
    async function handleSaveUserDetails(profileEvent: userDetails) {

        await api.put ('/user/update_profile', {
            work: profileEvent.work,
            birthday: profileEvent.birthday,
            city: profileEvent.city,
            hobbies: profileEvent.hobbies,
            phone: profileEvent.phone,
            relationship: profileEvent.relationship
        });

        setUserDetails ({
            work: profileEvent.work,
            birthday: profileEvent.birthday,
            city: profileEvent.city,
            hobbies: profileEvent.hobbies,
            phone: profileEvent.phone,
            relationship: profileEvent.relationship
        });
    }

    /**
     * Altera texto do botao e libera/bloqueia os inputs.
     *
     */
    const handleChangeButtonName = () => {

        if (allowEditing) {
            setButtonText (profileButton.EDITAR);
            setAllowEditing (false);

            // Fazendo submit do formulario programaticamente , para evitar que o submit seja feito ao alterar o nome.
            formRef.current?.dispatchEvent (
                new Event ('submit', {bubbles: true, cancelable: true})
            );

        } else {
            setButtonText (profileButton.SALVAR);
            setAllowEditing (true);
        }
    };
    return (
        <Container>
            <HeaderProfile>
                <img src={userInfo.profile_pic} alt="foto perfil"/>
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


            <form id={'profile'} onSubmit={handleSubmit (handleSaveUserDetails)} ref={formRef}>
                <Content>
                    <WorkImg
                        fill={userDetails.work ? theme.colors.primary : theme.colors.gray_medium}
                        stroke={userDetails.work ? theme.colors.primary : theme.colors.gray_medium}

                    />
                    <Input
                        {...register ('work')}
                        defaultValue={userDetails.work}
                        disabled={!allowEditing}
                    />

                    <CityImg
                        fill={userDetails.city ? theme.colors.green : theme.colors.gray_light}
                        stroke={userDetails.city ? theme.colors.green : theme.colors.gray_medium}
                    />
                    <Input
                        {...register ('city')}
                        defaultValue={userDetails.city}
                        disabled={!allowEditing}
                    />

                    <RelationshipImg
                        fill={userDetails.relationship ? theme.colors.pink : theme.colors.gray_light}
                        stroke={userDetails.relationship ? theme.colors.pink : theme.colors.gray_medium}
                    />
                    <Input
                        {...register ('relationship')}
                        defaultValue={userDetails.relationship}
                        disabled={!allowEditing}
                    />

                    <BirthdayImg
                        fill={userDetails.birthday ? theme.colors.yellow_light : theme.colors.gray_light}
                        stroke={userDetails.birthday ? theme.colors.yellow : theme.colors.gray_medium}
                    />
                    <Input
                        {...register ('birthday')}
                        type={'date'}
                        defaultValue={userDetails.birthday}
                        disabled={!allowEditing}
                    />

                    <HobbiesImg
                        stroke={userDetails.hobbies ? theme.colors.primary : theme.colors.gray_medium}
                    />
                    <Input
                        {...register ('hobbies')}
                        defaultValue={userDetails.hobbies}
                        disabled={!allowEditing}
                    />

                    <PhoneImg
                        fill={userDetails.phone ? theme.colors.red : theme.colors.gray_light}
                        stroke={userDetails.phone ? theme.colors.red : theme.colors.gray_medium}
                    />
                    <Input
                        {...register ('phone')}
                        defaultValue={userDetails.phone}
                        disabled={!allowEditing}
                    />

                    <TextArea
                        {...register ('about')}
                        placeholder="Nós conte um pouco mais sobre você.."
                        defaultValue={userDetails.about}
                        disabled={!allowEditing}
                    />

                </Content>
            </form>

        </Container>
    );
}