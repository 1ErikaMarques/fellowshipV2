import React from "react";
import { ButtonStyle } from "./styles";

interface ButtonProps{
  title: string;
}


export function Button(props: ButtonProps) {

  return(
    <ButtonStyle>{props.title}</ButtonStyle>
  )

  
}