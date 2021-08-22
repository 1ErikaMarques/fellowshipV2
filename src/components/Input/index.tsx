import {InputStyle, Label} from "./styles";

interface InputProps {
    labelTitle: string;
    required: boolean,
    type: string;
}


export function Input({labelTitle, required, type}: InputProps) {

    return (
        <>
            <InputStyle type={type} required={required}/>
            <Label>{labelTitle}</Label>
        </>
    )


}