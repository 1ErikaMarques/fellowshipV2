import {useState} from 'react';
import {CityImg, RelationshipImg, WorkImg, BirthdayImg, HobbiesImg, PhoneImg} from '../../components/Svgs';
import {useForm} from 'react-hook-form';
import {useTheme} from 'styled-components';
import {Button, Container, Content, Input, TextArea} from './styles'
import {Header} from '../Register/styles';

enum profileButton {
    EDITAR = 'Editar',
    SALVAR = 'Salvar'
}

interface userInfo {
    name: string;
    photoUrl: string;
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

interface ProfileProps {
    profileId: string;
}

export function Profile({profileId}: ProfileProps) {

    const [userDetails, setUserDetails] = useState<userDetails>({} as userDetails)
    const [userInfo, setUserInfo] = useState<userInfo>({} as userInfo)

    const {register, handleSubmit} = useForm<userDetails>();

    const [buttonText, setButtonText] = useState(profileButton.EDITAR)
    const [allowEditing, setAllowEditing] = useState(false)

    const theme = useTheme();

    /**
     * Salva as informacoes preenchidas no profile.
     * @param profileEvent dados dos usuario
     */
    const handleSaveUserDetails = (profileEvent: userDetails) => {

        setUserDetails({
            work: profileEvent.work,
            birthday: profileEvent.birthday,
            city: profileEvent.city,
            hobbies: profileEvent.hobbies,
            phone: profileEvent.phone,
            relationship: profileEvent.relationship
        })
    }

    /**
     * Altera texto do botao e libera/bloqueia os inputs.
     *
     */
    const handleChangeButtonName = () => {

        if (allowEditing) {
            setButtonText(profileButton.EDITAR)
            setAllowEditing(false)

        } else {
            setButtonText(profileButton.SALVAR)
            setAllowEditing(true)
        }
    }
    return (
        <Container>
            <Header>
                <img src={userInfo.photoUrl} alt="foto perfil"/>
                <h3>{userInfo.name}</h3>
                <Button form={'profile'}
                        onClick={handleChangeButtonName}
                        type={"submit"}
                        backgroundColor={allowEditing ? theme.colors.primary : theme.colors.gray_light}
                        color={allowEditing ? theme.colors.shape : theme.colors.gray_medium}>
                    {buttonText}
                </Button>
            </Header>


            <form id={"profile"} onSubmit={handleSubmit(handleSaveUserDetails)}>
                <Content>
                    <WorkImg
                        fill={userDetails.work ? theme.colors.primary : theme.colors.gray_dark}
                        stroke={userDetails.work ? theme.colors.primary : theme.colors.gray_medium}

                    />
                    <Input {...register("work")} disabled={!allowEditing} defaultValue={userDetails.work}/>

                    <CityImg
                        fill={userDetails.city ? theme.colors.green : theme.colors.gray_light}
                        stroke={userDetails.city ? theme.colors.green : theme.colors.gray_medium}
                    />
                    <Input {...register("city")} disabled={!allowEditing} defaultValue={userDetails.city}/>

                    <RelationshipImg
                        fill={userDetails.relationship ? theme.colors.pink : theme.colors.gray_light}
                        stroke={userDetails.relationship ? theme.colors.pink : theme.colors.gray_medium}
                    />
                    <Input {...register("relationship")} disabled={!allowEditing}
                           defaultValue={userDetails.relationship}/>

                    <BirthdayImg
                        fill={userDetails.birthday ? theme.colors.yellow_light : theme.colors.gray_light}
                        stroke={userDetails.birthday ? theme.colors.yellow : theme.colors.gray_medium}
                    />
                    <Input {...register("birthday")} type={'date'} disabled={!allowEditing}
                           defaultValue={userDetails.birthday}/>

                    <HobbiesImg
                        stroke={userDetails.hobbies ? theme.colors.primary : theme.colors.gray_medium}
                    />
                    <Input {...register("hobbies")} disabled={!allowEditing}
                           defaultValue={userDetails.hobbies}/>

                    <PhoneImg
                        fill={userDetails.phone ? theme.colors.red : theme.colors.gray_light}
                        stroke={userDetails.phone ? theme.colors.red : theme.colors.gray_medium}
                    />
                    <Input {...register("phone")} disabled={!allowEditing}
                           defaultValue={userDetails.phone}/>

                    <TextArea disabled={!allowEditing} placeholder="Nós conte um pouco mais sobre você.."
                              defaultValue={userDetails.about} {...register('about')}/>

                </Content>
            </form>

        </Container>
    );
}