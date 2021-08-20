import { ReactComponent as LogoIcon} from '../../assets/header/logo.svg';
import { ReactComponent as NotificationIcon} from '../../assets/header/notification.svg';
import { ReactComponent as  HomeIcon } from '../../assets/header/home.svg';
import { ReactComponent as UserIcon } from '../../assets/header/user.svg';
import { Notification, Home, User, Logo} from './styles';




export const LogoImg = () => {
  return (
   <Logo>
     <LogoIcon />
   </Logo>
    
  )
}

export const NotificationImg = () => {
  return (
    <Notification title="Notificações">
    <NotificationIcon />
    </Notification>
  )
}

export const HomeImg = () => {
  return (
    <Home>
      <HomeIcon />
    </Home>
  )
}

export const UserImg = () => {
  return (
    <User>
      <UserIcon />
    </User>
  )
}

