import React from "react";

import {Button} from "../../../components/Button";

import {useSignUpState} from "./SignUp.state";
import {SignUpFields, SignUpFieldLabels} from "./SignUp.constants";
import {renderInput} from "../Login.helpers";

export const SignUpView = () => {
    const { formState, submitDisabled, onSubmit, onInputChange} = useSignUpState();

    return (
        <form onSubmit={onSubmit}>
            <div className='login-form-title'>Регистрация</div>
            {Object.values(SignUpFields).map(key => {
                return renderInput(
                    SignUpFields[key],
                    SignUpFieldLabels[SignUpFields[key]],
                    formState[SignUpFields[key]],
                    onInputChange
                );
            })}
            <Button
                label='Зарегестрироваться'
                type='submit'
                disabled={submitDisabled}
                onClick={() => onSubmit}
            />
        </form>
    );
}