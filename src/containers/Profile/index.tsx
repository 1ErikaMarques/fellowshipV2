import { useState } from 'react';
import { CityImg, RelationshipImg, WorkImg, BirthdayImg, HobbiesImg, PhoneImg } from '../../components/Svgs';
import theme from '../../styles/theme';
import { Container, Content, Header, Span } from './styles'

interface ProfileData {
  work?: string;
  city?: string;
  relationship?: string;
  birthday?: string;
  hobbies?: string;
  phone?: string;
  name: string;
  photoUrl: string;
}

interface ProfileProps {
  profileId: string;
}



export function Profile({profileId}: ProfileProps){
  const  [data, setData] = useState<ProfileData>({photoUrl:'https://avatars.githubusercontent.com/u/4424108?v=4',name:'Juan Marques'} as ProfileData )
  const [editButton, setEditButton] = useState('Editar')
  
  function handleEditButton(){
    setEditButton('Salvar')
  }

  return(
     <Container>
       <Header>
         <img src={data.photoUrl} alt="foto perfil"></img>
         <h3>{data.name}</h3>
         <button onClick={handleEditButton}>{editButton}</button>
       </Header>
       
       <Content>
              
          <WorkImg 
            fill={data.relationship ?  theme.colors.primary : theme.colors.gray_dark} 
            stroke={data.relationship ?  theme.colors.primary : theme.colors.gray_medium}
            
          />
          <Span contentEditable>CTO</Span>
              
          
          <CityImg 
            fill={data.relationship ?  theme.colors.green : theme.colors.gray_light} 
            stroke={data.relationship ?  theme.colors.green : theme.colors.gray_medium}
          />
          <Span>São Paulo</Span>
          
          <RelationshipImg 
            fill={data.relationship ?  theme.colors.pink : theme.colors.gray_light} 
            stroke={data.relationship ?  theme.colors.pink : theme.colors.gray_medium} 
          />
          <Span>Casado</Span>

          <BirthdayImg 
            fill={data.relationship ?  theme.colors.yellow_light : theme.colors.gray_light} 
            stroke={data.relationship ?  theme.colors.yellow : theme.colors.gray_medium} 
          />
          <Span>19/01/1993</Span>

          <HobbiesImg        
            stroke={data.relationship ?  theme.colors.primary : theme.colors.gray_medium} 
          />
          <Span>Jogar video game</Span>

          <PhoneImg 
            fill={data.relationship ?  theme.colors.red : theme.colors.gray_light} 
            stroke={data.relationship ?  theme.colors.red : theme.colors.gray_medium} 
          />
          <Span>00000-000</Span>
          
      </Content>
       
       
    </Container>
    
  );   
  
}