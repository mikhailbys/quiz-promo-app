import React from "react";
import './RadioGroup.styles.css';
import {Radio} from "../Radio";

export interface Option {
    name: string;
    value: string;
}

interface Props {
    options: {
        optionA: Option,
        optionB: Option,
        optionC: Option,
        optionD: Option,
    },
    setValue: (value: string) => void;
    currentValue: string;
}

export const RadioGroup = ({ options, setValue, currentValue }: Props) => {

    const renderRadio = ({ name, value }: Option) =>
        <Radio name={name} value={value} checked={currentValue === value} setValue={setValue} />;

    return (
        <div className='rg-container'>
            {/* @ts-ignore */}
            {Object.keys(options).map(key => renderRadio(options[key]))}
        </div>
    );
}