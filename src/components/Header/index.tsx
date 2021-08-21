import { HomeImg, LogoImg ,NotificationImg, UserImg  } from '../Svgs/index'
import { Container, Content, NeighborhoodName } from './styles'

export function Header() {

  return(

    <Container>
      <LogoImg />
      <NeighborhoodName>Moema</NeighborhoodName>
      <Content>
        <NotificationImg />
        <HomeImg />
        <UserImg />
      </Content>
     
    </Container>
  );
}