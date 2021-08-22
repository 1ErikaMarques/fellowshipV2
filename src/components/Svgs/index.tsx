import { ReactComponent as LogoIcon} from '../../assets/header/logo.svg';
import { ReactComponent as NotificationIcon} from '../../assets/header/notification.svg';
import { ReactComponent as  HomeIcon } from '../../assets/header/home.svg';
import { ReactComponent as UserIcon } from '../../assets/header/user.svg';
import { ReactComponent as WorkIcon } from '../../assets/profile/work.svg';
import { ReactComponent as CityIcon } from '../../assets/profile/city.svg';
import { ReactComponent as RelationshipIcon } from '../../assets/profile/relationship.svg';
import { ReactComponent as HobbiesIcon } from '../../assets/profile/hobbies.svg';
import { ReactComponent as BirthdayIcon } from '../../assets/profile/birthday.svg';
import { ReactComponent as PhoneIcon } from '../../assets/profile/phone.svg';

import { Notification, Home, User, Logo, Relationship, ProfileIcons, Work, City, Birthday, Hobbies, Phone} from './styles';




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
export const WorkImg = (props: ProfileIcons) => {
  return(
    <Work fill={props.fill} stroke={props.stroke}>
      <WorkIcon />
    </Work>
  )
}

export const CityImg = (props: ProfileIcons) => {
  return(
    <City fill={props.fill} stroke={props.stroke}>
      <CityIcon />
    </City>
  )
}

export const RelationshipImg = (props: ProfileIcons) => {
  return(
    <Relationship fill={props.fill} stroke={props.stroke}>
      <RelationshipIcon />
    </Relationship>
  )
}

export const BirthdayImg = (props: ProfileIcons) => {
  return(
    <Birthday fill={props.fill} stroke={props.stroke}>
      <BirthdayIcon />
    </Birthday>
  )
}
export const HobbiesImg = (props: ProfileIcons) => {
  return(
    <Hobbies fill={props.fill} stroke={props.stroke}>
      <HobbiesIcon />
    </Hobbies>
  )
}
export const PhoneImg = (props: ProfileIcons) => {
  return(
    <Phone fill={props.fill} stroke={props.stroke}>
      <PhoneIcon />
    </Phone>
  )
}


