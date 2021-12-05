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

import Tooltip from '@mui/material/Tooltip';

export const LogoImg = () => {
  return (
    <Logo>
      <LogoIcon />
    </Logo>

  )
}

export const NotificationImg = (props: IconsProps) => {
  return (
    <Notification fill={props.fill} stroke={props.stroke}>
      <Tooltip title="Notificações" arrow >
      <NotificationIcon />
      </Tooltip>
    </Notification>
  )
}

export const HomeImg = () => {
  return (
    <Home>
      <Tooltip title="Página inicial" arrow >
      <HomeIcon />
      </Tooltip>
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
      <Tooltip title="Trabalho" arrow >
      <WorkIcon />
      </Tooltip>
    </Work>
  )
}

export const CityImg = (props: IconsProps) => {
  return (
    <City fill={props.fill} stroke={props.stroke}>
      <Tooltip title="Cidade" arrow >
      <CityIcon />
      </Tooltip>
    </City>
  )
}

export const RelationshipImg = (props: IconsProps) => {
  return (

    <Relationship fill={props.fill} stroke={props.stroke}>
      <Tooltip title="Relacionamento" arrow >
      <RelationshipIcon />
      </Tooltip>
    </Relationship>
  )
}

export const BirthdayImg = (props: IconsProps) => {
  return (
    <Birthday fill={props.fill} stroke={props.stroke}>
      <Tooltip title="Aniversário" arrow >
      <BirthdayIcon />
      </Tooltip>
    </Birthday>
  )
}

export const HobbiesImg = (props: IconsProps) => {
  return (
    <Hobbies fill={props.fill} stroke={props.stroke}>
      <Tooltip title="O que gosta de fazer" arrow >
      <HobbiesIcon />
      </Tooltip>
    </Hobbies>
  )
}

export const PhoneImg = (props: IconsProps) => {
  return (
    <Phone fill={props.fill} stroke={props.stroke}>
      <Tooltip title="Telefone" arrow >
      <PhoneIcon />
      </Tooltip>
    </Phone>
  )
}

export const CameraImg = (props: IconsProps) => {
  return (
    <Camera fill={props.fill} stroke={props.stroke}>
      <Tooltip title="Adicione fotos" arrow >
      <CameraIcon />
      </Tooltip>
    </Camera>
  )
}

export const VideoImg = (props: IconsProps) => {
  return (
    <Video fill={props.fill} stroke={props.stroke}>
      <Tooltip title="Adicione videos" arrow >
      <VideoIcon />
      </Tooltip>
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


