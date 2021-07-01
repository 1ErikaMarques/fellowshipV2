import { ReactComponent as Logo } from '../../assets/header/logo.svg';
import { ReactComponent as NotificationIcon} from '../../assets/header/notification.svg';
import { Notification } from './styles'


export const LogoImg = () => {
  return (
    
    <Logo />
  );
}

export const NotificationImg = () => {
  return (
    <Notification title="Notificações">
    <NotificationIcon />
    </Notification>
  )
}