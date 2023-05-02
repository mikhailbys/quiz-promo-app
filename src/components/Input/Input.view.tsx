import React, {HTMLInputTypeAttribute, useEffect, useRef, useState} from "react";
import './Input.styles.css';

export interface InputChangeEvent {
    name: string,
    value: string
}

interface Props {
    label: string;
    type?: HTMLInputTypeAttribute;
    value: string;
    name: string;
    onChange: ({ name, value }: InputChangeEvent) => void;
    required?: boolean;
}

export const Input = ({ label, type = 'text', value, onChange, required = false, name }: Props) => {
    const [isError, setIsError] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const inputClasses = `input ${isError ? 'input-error' : ''}`
    const labelClasses = `label ${required ? 'label-required' : ''}`

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isError) {
            if (event.target.value === '' && required) {
                inputRef?.current?.focus();
                setIsError(true);
            }
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (required && event.currentTarget.value !== '') {
            setIsError(false)
        }
        onChange({
            name: event.currentTarget.name,
            value: event.currentTarget.value
        });
    }

    return (
        <div className='input-container'>
            <label className={labelClasses}>{label}</label>
            <input
                className={inputClasses}
                type={type}
                name={name}
                ref={inputRef}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {isError && <label className='label-error'>Заполните это поле</label>}
        </div>
    );
}