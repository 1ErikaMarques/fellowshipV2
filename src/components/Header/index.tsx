
import SelectSearch from 'react-select-search'
import { HomeImg, LogoImg ,NotificationImg, UserImg  } from '../Svgs/index'
import { Container, Content, NeighborhoodName, Search } from './styles'


interface HeaderProps {
  neighborhoodName: string;
}
export function Header({neighborhoodName}: HeaderProps ) {
const options = [{name:'Jabaquara',value:''},{name:'Interlagos',value:''}]

  return(

    <Container>
      <LogoImg />
      <NeighborhoodName>
        {neighborhoodName}
      </NeighborhoodName>

      <Search>
     
      </Search>
      

      <Content>
        
        <HomeImg />
        <NotificationImg />
        <UserImg />
      </Content>
     
    </Container>
  );
}