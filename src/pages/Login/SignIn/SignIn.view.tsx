import React from "react";
import {Input} from "../../../components/Input";
import {SignInFieldLabels, SignInFields} from "./SignIn.constants";
import {Button} from "../../../components/Button";
import {useSignInState} from "./SignIn.state";
import './SignIn.styles.css';

export const SignInForm = () => {
    const {
        formState,
        onInputChange,
        onSubmit,
        submitDisabled
    } = useSignInState();

    return (
        <form onSubmit={onSubmit}>
            <div className='login-title'>Войти</div>
            <Input
                key={SignInFields.login}
                name={SignInFields.login}
                label={SignInFieldLabels[SignInFields.login]}
                value={formState[SignInFields.login]}
                onChange={onInputChange}
                required
            />
            <Input
                key={SignInFields.password}
                name={SignInFields.password}
                label={SignInFieldLabels[SignInFields.password]}
                type='password'
                value={formState[SignInFields.password]}
                onChange={onInputChange}
                required
            />
            <Button
                label='Войти'
                type='submit'
                disabled={submitDisabled}
                onClick={() => onSubmit}
            />
        </form>
    );
}