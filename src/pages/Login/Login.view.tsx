import {SignInForm} from "./SignIn";
import {SignUpView} from "./SignUp";
import './Login.styles.css';
import {useLocation} from "react-router-dom";
import {Link} from "../../components/Link";

export const Login = () => {
    const {pathname, hash} = useLocation();

    return (
        <div className='login-page-container'>
            <div className='form-container'>
                {hash ? <SignUpView /> : <SignInForm />}
            </div>
            {!hash && <Link label='Нет учетной записи?' href={`${pathname}/#signup`} />}
        </div>
    );
}