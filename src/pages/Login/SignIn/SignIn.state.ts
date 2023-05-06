import {useEffect, useState} from "react";
import {useAppContext} from "../../../contexts/App.context";
import {InputChangeEvent} from "../../../components/Input";
import {SignInFields} from "./SignIn.constants";
import {useLocation, useNavigate} from "react-router-dom";
import {initAuthModel} from "../../../database";
import {AUTH_STORE, AuthFields} from "../../../database/storages/auth";
import {AppPaths} from "../../../Router/Router.helpers";

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

    useEffect(() => {
        setSubmitDisabled(Object.values(formState).some(v => v === ''));
    }, [formState]);

    const onInputChange = ({name, value}: InputChangeEvent) => {
        setFormState({...formState, [name]: value})
    }

    const onSubmit = async (event: any) => {
        event.preventDefault();
        if (!submitDisabled) {
            const { login, password} = formState;
            const auth = await db.createObjectStore(initAuthModel);
            const result = await db.getValueByIndex(AUTH_STORE, AuthFields.login, login);
            console.log('1')
            if (result && result[AuthFields.password] === password) {
                setToken('token!');
                setUsername(formState[SignInFields.login])
                navigate(AppPaths.HOME);
            }
        }
    }

    return {
        formState,
        pathname,
        submitDisabled,
        onInputChange,
        onSubmit
    }
}