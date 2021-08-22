import {ButtonStyle} from "./styles";

interface ButtonProps{
  title: string;
  onClick?: () => void;
}


export function Button({title,onClick}: ButtonProps) {

  return(
    <ButtonStyle onClick={onClick}>{title}</ButtonStyle>
  )

  
}