import {ButtonStyle} from "./styles";

interface ButtonProps {
    title: string;
    onClick?: () => void;
    style: {
        width?: string
        boxShadowLength?: string;
        fontWeight?: string;
        fontSize?: string;
    }
}


export function Button({title, onClick, style}: ButtonProps) {

    return (
        <ButtonStyle width={style.width} boxShadowLength={style.boxShadowLength} onClick={onClick}>{title}</ButtonStyle>
    )


}