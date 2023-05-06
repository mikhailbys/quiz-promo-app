import {useLocation} from "react-router-dom";

import {SignInForm} from "./SignIn";
import {SignUpView} from "./SignUp";

import './Login.styles.css';
import {AppPaths} from "../../Router/Router.helpers";
import {Backward} from "../../components/Backward";
import React from "react";

export const Login = () => {
    const { hash} = useLocation();

    return (
        <div className='login-page-container'>
            {hash && <Backward to={AppPaths.LOGIN}/>}
            <div className={hash ? 'signup-form-container' : 'signin-form-container'}>
                {hash ? <SignUpView /> : <SignInForm />}
            </div>
        </div>
    );
}