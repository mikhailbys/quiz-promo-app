import React from "react";
import {Input} from "../../../components/Input";
import {Button} from "../../../components/Button";
import {useSignUpState} from "./SignUp.state";
import {SignUpFields, SignUpFieldLabels} from "./SignUp.constants";
import './SignUp.styles.css';
import {Backward} from "../../../components/Backward";
import {AppPaths} from "../../../Router/Router.helpers";

export const SignUpView = () => {
    const {onSubmit, formState, submitDisabled, onInputChange} = useSignUpState();

    return (
        <form onSubmit={onSubmit}>
            <Backward to={AppPaths.LOGIN}/>
            <div className='signup-title'>Регистрация</div>
            <Input
                key={SignUpFields.login}
                name={SignUpFields.login}
                label={SignUpFieldLabels[SignUpFields.login]}
                value={formState[SignUpFields.login]}
                onChange={onInputChange}
                required
            />
            <Input
                key={SignUpFields.password}
                name={SignUpFields.password}
                label={SignUpFieldLabels[SignUpFields.password]}
                type='password'
                value={formState[SignUpFields.password]}
                onChange={onInputChange}
                required
            />
            <Input
                key={SignUpFields.passwordRepeat}
                name={SignUpFields.passwordRepeat}
                label={SignUpFieldLabels[SignUpFields.passwordRepeat]}
                type='password'
                value={formState[SignUpFields.passwordRepeat]}
                onChange={onInputChange}
                required
            />
            <Button
                label='Зарегестрироваться'
                type='submit'
                disabled={submitDisabled}
                onClick={() => onSubmit}
            />
        </form>
    );
}