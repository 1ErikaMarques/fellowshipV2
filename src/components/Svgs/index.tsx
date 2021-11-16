import { ReactComponent as LogoIcon } from '../../assets/header/logo.svg';
import { ReactComponent as NotificationIcon } from '../../assets/header/notification.svg';
import { ReactComponent as HomeIcon } from '../../assets/header/home.svg';
import { ReactComponent as UserIcon } from '../../assets/header/user.svg';
import { ReactComponent as WorkIcon } from '../../assets/profile/work.svg';
import { ReactComponent as CityIcon } from '../../assets/profile/city.svg';
import { ReactComponent as RelationshipIcon } from '../../assets/profile/relationship.svg';
import { ReactComponent as HobbiesIcon } from '../../assets/profile/hobbies.svg';
import { ReactComponent as BirthdayIcon } from '../../assets/profile/birthday.svg';
import { ReactComponent as PhoneIcon } from '../../assets/profile/phone.svg';
import { ReactComponent as CameraIcon } from '../../assets/UserPost/camera.svg';
import { ReactComponent as VideoIcon } from '../../assets/UserPost/video.svg';
import { ReactComponent as SecurityIcon } from '../../assets/UserSettings/security.svg';
import { ReactComponent as UserAccountIcon } from '../../assets/UserSettings/user_account.svg';

import {
  Notification,
  Home,
  User,
  Logo,
  Relationship,
  IconsProps,
  Work,
  City,
  Birthday,
  Hobbies,
  Phone,
  Camera,
  Video,
  Security,
  UserAccount
} from './styles';


export const LogoImg = () => {
  return (
    <Logo>
      <LogoIcon />
    </Logo>

  )
}

export const NotificationImg = (props: IconsProps) => {
  return (
    <Notification title="Notificações" fill={props.fill} stroke={props.stroke}>
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

export const UserImg = (props: IconsProps) => {
  return (
    <User fill={props.fill} stroke={props.stroke}>
      <UserIcon />
    </User>
  )
}
export const WorkImg = (props: IconsProps) => {
  return (
    <Work fill={props.fill} stroke={props.stroke}>
      <WorkIcon />
    </Work>
  )
}

export const CityImg = (props: IconsProps) => {
  return (
    <City fill={props.fill} stroke={props.stroke}>
      <CityIcon />
    </City>
  )
}

export const RelationshipImg = (props: IconsProps) => {
  return (
    <Relationship fill={props.fill} stroke={props.stroke}>
      <RelationshipIcon />
    </Relationship>
  )
}

export const BirthdayImg = (props: IconsProps) => {
  return (
    <Birthday fill={props.fill} stroke={props.stroke}>
      <BirthdayIcon />
    </Birthday>
  )
}

export const HobbiesImg = (props: IconsProps) => {
  return (
    <Hobbies fill={props.fill} stroke={props.stroke}>
      <HobbiesIcon />
    </Hobbies>
  )
}

export const PhoneImg = (props: IconsProps) => {
  return (
    <Phone fill={props.fill} stroke={props.stroke}>
      <PhoneIcon />
    </Phone>
  )
}

export const CameraImg = (props: IconsProps) => {
  return (
    <Camera fill={props.fill} stroke={props.stroke}>
      <CameraIcon />
    </Camera>
  )
}

export const VideoImg = (props: IconsProps) => {
  return (
    <Video fill={props.fill} stroke={props.stroke}>
      <VideoIcon />
    </Video>
  )
}

export const SecurityImg = (props: IconsProps) => {
  return (
    <Security fill={props.fill} stroke={props.stroke}>
      <SecurityIcon />
    </Security>
  )
}

export const UserAccountImg = (props: IconsProps) => {
  return (
    <UserAccount fill={props.fill} stroke={props.stroke}>
      <UserAccountIcon />
    </UserAccount>
  )
}


