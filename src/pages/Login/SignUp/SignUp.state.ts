import {SignUpFields} from "./SignUp.constants";
import {useEffect, useState} from "react";
import {InputChangeEvent} from "../../../components/Input";
import {useAppContext} from "../../../contexts/App.context";
import {useNavigate} from "react-router-dom";
import {AppPaths} from "../../../Router/Router.helpers";
import {initAuthModel} from "../../../database";
import {AUTH_STORE} from "../../../database/storages/auth";

interface FormState {
    [SignUpFields.login]: string;
    [SignUpFields.password]: string;
    [SignUpFields.passwordRepeat]: string;
}

const INITIAL_FORM_STATE = {
    [SignUpFields.login]: '',
    [SignUpFields.password]: '',
    [SignUpFields.passwordRepeat]: ''
}

export const useSignUpState = () => {
    const [formState, setFormState] = useState<FormState>(INITIAL_FORM_STATE);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const navigate = useNavigate();

    const {setUsername, db} = useAppContext();

    useEffect(() => {
        setSubmitDisabled(Object.values(formState).some(v => v === ''));
    }, [formState]);

    const onInputChange = ({name, value}: InputChangeEvent) => {
        setFormState({...formState, [name]: value})
    }

    const onSubmit = async (event: any) => {
        event.preventDefault();

        if (!submitDisabled) {
            const { passwordRepeat, ...rest} = formState;
            await db.createObjectStore(initAuthModel);
            const result = await db.putValue(AUTH_STORE, rest);
            if (result) {
                // TODO notification
                navigate(AppPaths.LOGIN);
            }
        }
    }

    return {
        formState,
        submitDisabled,
        onInputChange,
        onSubmit
    }
}