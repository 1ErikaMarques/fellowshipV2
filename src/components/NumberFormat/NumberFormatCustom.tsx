import { forwardRef } from 'react';
import NumberFormat from "react-number-format";

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}
 export function currencyFormatter(value: string) {
    if (!Number(value)) return "";

    const amount = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(Number.parseFloat(value) / 100);

    return `${amount}`;
}

export const NumberFormatCustom = forwardRef<NumberFormat, CustomProps>(
    function NumberFormatCustom(props, ref) {
        const { onChange, ...other } = props;

        return (
            <NumberFormat
                {...other}
                getInputRef={ref}
                onValueChange={(values) => {
                    onChange({
                        target: {
                            name: props.name,
                            value: currencyFormatter(values.value),
                        },
                    });
                }}
                format={currencyFormatter}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$"
            />
        );
    },
);