import { ButtonStyle } from './styles';

interface ButtonProps {
    title: string;
    onClick?: () => void;
    form?: string;
    style: {
        width?: string
        boxShadowLength?: string;
        fontWeight?: string;
        fontSize?: string;
        marginBottom?: string;
    }
}


export function Button({ title, onClick, style, form }: ButtonProps) {

    return (
        <ButtonStyle
            width={style.width}
            marginBottom={style.marginBottom}
            boxShadowLength={style.boxShadowLength}
            form={form}
            type={"submit"}
            onClick={onClick}>{title}
        </ButtonStyle>
    )
}