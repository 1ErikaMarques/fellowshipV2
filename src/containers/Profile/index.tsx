import { useState } from 'react';
import { CityImg, RelationshipImg, WorkImg, BirthdayImg, HobbiesImg, PhoneImg } from '../../components/Svgs';

import { useTheme } from 'styled-components';
import { Container, Content, Header, Span, Button } from './styles'

interface ProfileData {
  work?: string;
  city?: string;
  relationship?: string;
  birthday?: string;
  hobbies?: string;
  phone?: string;
  name: string;
  photoUrl?: string;
}

interface ProfileProps {
  profileId: string;
}

export function Profile({ profileId }: ProfileProps) {
  const [data, setData] = useState<ProfileData>({} as ProfileData)
  const [editButton, setEditButton] = useState('Editar')
  const [allowEditing, setAllowEditing] = useState(false)


  const theme = useTheme();

  function handleEditButton() {

    if (allowEditing === true) {
      setEditButton('Editar')
      setAllowEditing(false)
      setData({
        name: data.name,
        work: data.work
      })
      console.log(data)

    } else {
      setEditButton('Salvar')
      setAllowEditing(true)
    }
  }

  return (
    <Container>
      <Header>
        <img src={data.photoUrl} alt="foto perfil"></img>
        <h3>{data.name}</h3>
        <Button
          onClick={handleEditButton}
          backgroundColor={allowEditing ? theme.colors.primary : theme.colors.gray_light}
          color={allowEditing ? theme.colors.shape : theme.colors.gray_medium}
        >
          {editButton}
        </Button>
      </Header>

      <Content>

        <WorkImg
          fill={data.work ? theme.colors.primary : theme.colors.gray_dark}
          stroke={data.work ? theme.colors.primary : theme.colors.gray_medium}

        />
        <Span contentEditable={allowEditing}>{data.work}</Span>


        <CityImg
          fill={data.city ? theme.colors.green : theme.colors.gray_light}
          stroke={data.city ? theme.colors.green : theme.colors.gray_medium}
        />
        <Span>São Paulo</Span>

        <RelationshipImg
          fill={data.relationship ? theme.colors.pink : theme.colors.gray_light}
          stroke={data.relationship ? theme.colors.pink : theme.colors.gray_medium}
        />
        <Span>Casado</Span>

        <BirthdayImg
          fill={data.birthday ? theme.colors.yellow_light : theme.colors.gray_light}
          stroke={data.birthday ? theme.colors.yellow : theme.colors.gray_medium}
        />
        <Span>19/01/1993</Span>

        <HobbiesImg
          stroke={data.hobbies ? theme.colors.primary : theme.colors.gray_medium}
        />
        <Span>Jogar video game</Span>

        <PhoneImg
          fill={data.phone ? theme.colors.red : theme.colors.gray_light}
          stroke={data.phone ? theme.colors.red : theme.colors.gray_medium}
        />
        <Span>00000-000</Span>

      </Content>


    </Container>

  );

}