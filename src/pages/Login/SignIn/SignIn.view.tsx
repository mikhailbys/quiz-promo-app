import React from "react";

import {Button} from "../../../components/Button";
import {Link} from "../../../components/Link";

import {useSignInState} from "./SignIn.state";
import {SignInFieldLabels, SignInFields} from "./SignIn.constants";
import {renderInput} from "../Login.helpers";

export const SignInForm = () => {
    const {
        formState,
        pathname,
        onInputChange,
        onSubmit,
        submitDisabled
    } = useSignInState();

    return (
        <form onSubmit={onSubmit}>
            <div className='login-form-title'>Войти</div>
            {Object.values(SignInFields).map(key => {
                return renderInput(
                    SignInFields[key],
                    SignInFieldLabels[SignInFields[key]],
                    formState[SignInFields[key]],
                    onInputChange
                );
            })}
            <Button
                label='Войти'
                type='submit'
                disabled={submitDisabled}
                onClick={() => onSubmit}
            />
            <Link
                className='login-link'
                label='Нет учетной записи?'
                href={`${pathname}/#signup`}
            />
        </form>
    );
}