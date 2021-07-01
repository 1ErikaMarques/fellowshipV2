import { LogoImg } from '../Svgs/index'
import { NotificationImg } from '../Svgs/index'
import { Content } from './styles'

export function Header() {

  return(

    <Content>
    <LogoImg />
    <NotificationImg />
    </Content>
  );
}