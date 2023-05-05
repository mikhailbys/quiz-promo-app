import {Link} from "react-router-dom";
import {AppPaths} from "../../Router/Router.helpers";
import React from "react";
import './Header.styles.css';
import {ReactComponent as LogoutIcon} from '../../static/svg/logout.svg'
import {useHeaderState} from "./Header.state";
import {Avatar} from "../Avatar";

export const Header = () => {
    const { username, setToken } = useHeaderState();

    return (
        <div className='h-container'>
            <div className='h-link-container'>
                <Link className='h-link' to={AppPaths.PROFILE}>
                    <div className='profile-bar-container'>
                        <Avatar src={''}/>
                        <p className='username'>{`Партнер ${username}`}</p>
                    </div>
                </Link>
                <Link className='h-link' to={AppPaths.LOGIN} onClick={() => setToken(null)}>
                    <div>
                        <LogoutIcon className='icons-c' />
                    </div>
                </Link>
            </div>
        </div>
    );
}