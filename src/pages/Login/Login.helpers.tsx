import React from "react";

import {Input, InputChangeEvent} from "../../components/Input";

export interface FormError {
    hasError: boolean;
    message?: string;
}

export const INITIAL_ERROR_STATE = {
    hasError: false
}

export const renderInput = (
    fieldName: string,
    fieldLabel: string,
    fieldValue: string,
    onInputChange: ({name, value}: InputChangeEvent) => void
) => {
    return (
        <Input
            key={fieldName}
            name={fieldName}
            label={fieldLabel}
            value={fieldValue}
            onChange={onInputChange}
            required
        />
    );
};