import React from "react";
import './Radio.styles.css';

interface Props {
    name: string;
    value: string;
    setValue: (value: string) => void;
    checked: boolean;
}

export const Radio = ({ name, value, checked, setValue }: Props) => {
    const classnames = checked ? 'radio-container radio-checked' : 'radio-container';

    return (
        <div className={classnames} key={value} onClick={() => setValue(value)}>
            <input
                className='radio-input'
                type="radio"
                id={`${value}`}
                name={name}
                value={value}
                checked={checked}
                onChange={() => null}
            />
            <label className='radio-label' htmlFor={value}>{name}</label>
        </div>
    );
}