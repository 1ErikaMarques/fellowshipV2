import {Container, Content, NeighborhoodName, Search} from './styles'
import {HomeImg, LogoImg, NotificationImg, UserImg} from '../Svgs'


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