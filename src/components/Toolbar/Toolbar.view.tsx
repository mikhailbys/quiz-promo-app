import React from "react";
import './Toolbar.styles.css';
import {Link} from "react-router-dom";
import {AppPaths} from "../../Router/Router.helpers";
import {ReactComponent as PlayIcon} from '../../static/svg/play.svg'
import {ReactComponent as LogoIcon} from '../../static/svg/home.svg'
import {ReactComponent as InfoIcon} from '../../static/svg/info.svg'

export const Toolbar = () => {
    return (
        <div className='toolbar-container'>
            <div className='toolbar'>
                <Link className='h-link' to={AppPaths.HOME}>
                    <LogoIcon className='icons-c'/>
                </Link>
                <Link className='h-link' to={AppPaths.QUIZ}>
                    <PlayIcon className='icons-c'/>
                </Link>
                <Link className='h-link' to={AppPaths.ABOUT}>
                    <InfoIcon className='icons-c'/>
                </Link>
            </div>
        </div>
    );
}