import { useState } from 'react';
import { CityImg, RelationshipImg, WorkImg, BirthdayImg, HobbiesImg, PhoneImg } from '../../components/Svgs';
import theme from '../../styles/theme';
import { Container } from './styles'

interface ProfileData {
  work?: string;
  city?: string;
  relationship?: string;
  birthday?: string;
  hobbies?: string;
  phone?: string;
}

interface ProfileProps {
  profileId: string;
}



export function Profile({profileId}: ProfileProps){
  const  [data, setData] = useState<ProfileData>({relationship: 'alguma coisa'} as ProfileData )
 
 
  return(
     <Container>
       <WorkImg 
        fill={data.relationship ?  theme.colors.primary : theme.colors.gray_light} 
        stroke={data.relationship ?  theme.colors.primary : theme.colors.gray_light}
       />
          
       
       <CityImg 
        fill={data.relationship ?  theme.colors.green : theme.colors.gray_light} 
        stroke={data.relationship ?  theme.colors.green : theme.colors.gray_light}
       />
       
       <RelationshipImg 
        fill={data.relationship ?  theme.colors.pink : theme.colors.gray_light} 
        stroke={data.relationship ?  theme.colors.pink : theme.colors.gray_light} 
       />

       <BirthdayImg 
        fill={data.relationship ?  theme.colors.yellow : theme.colors.gray_light} 
        stroke={data.relationship ?  theme.colors.yellow_light : theme.colors.gray_light} 
       />

       <HobbiesImg        
        stroke={data.relationship ?  theme.colors.primary : theme.colors.gray_light} 
       />

       <PhoneImg 
        fill={data.relationship ?  theme.colors.red : theme.colors.gray_light} 
        stroke={data.relationship ?  theme.colors.red : theme.colors.gray_light} 
       />

       
       <span>{data.work}</span>
    </Container>
    
  );   
  
}