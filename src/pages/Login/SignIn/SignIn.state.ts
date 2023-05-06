import {FormEvent, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {useAppContext} from "../../../contexts/App.context";
import {InputChangeEvent} from "../../../components/Input";
import {initAuthModel} from "../../../database";
import {AUTH_STORE, AuthFields} from "../../../database/storages/auth";
import {AppPaths} from "../../../Router/Router.helpers";
import {SIGN_IN_ERROR} from "../../../helpers/errorMessages";

import {SignInFields} from "./SignIn.constants";
import {FormError, INITIAL_ERROR_STATE} from "../Login.helpers";

interface FormState {
    [SignInFields.login]: string,
    [SignInFields.password]: string
}

const INITIAL_FORM_STATE = {
    [SignInFields.login]: '',
    [SignInFields.password]: ''
}

export const useSignInState = () => {
    const { setUsername, db, setToken, token } = useAppContext();
    const navigate = useNavigate();
    const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const {pathname} = useLocation();
    const [error, setError] = useState<FormError>(INITIAL_ERROR_STATE);

    useEffect(() => {
        setSubmitDisabled(Object.values(formState).some(v => v === ''));
    }, [formState]);

    const onInputChange = ({name, value}: InputChangeEvent) => {
        setFormState({...formState, [name]: value})
    }

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!submitDisabled) {
            const { login, password} = formState;
            await db.createObjectStore(initAuthModel);
            const result = await db.getValueByIndex(AUTH_STORE, AuthFields.login, login);
            console.log('1')
            if (result && result[AuthFields.password] === password) {
                setToken('token!');
                setUsername(formState[SignInFields.login])
                navigate(AppPaths.HOME);
            } else {
                setFormState(INITIAL_FORM_STATE);
                setError({
                    hasError: true,
                    message: SIGN_IN_ERROR
                });
            }
        }
    }

    return {
        formState,
        error,
        pathname,
        submitDisabled,
        onInputChange,
        onSubmit
    }
}