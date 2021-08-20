import {InputForm, Label} from "./styles";

interface InputProps {
    type: string;
    name: string;
    required: boolean;
    labelTitle: string;
}

export function Input({type, name, required, labelTitle}: InputProps) {

    return (
        <>
            <InputForm type={type} name={name} required={required}/>
            <Label>{labelTitle}</Label>
        </>
    )
}