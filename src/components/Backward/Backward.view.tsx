import React from "react";
import {ReactComponent as ArrowIcon} from '../../static/svg/arrow-back.svg'
import './Backward.styles.css';
import {useNavigate} from "react-router-dom";

interface Props {
    to: string;
}

export const Backward = ({ to }: Props) => {
    const navigate = useNavigate();
    return (
        <div className='backward-container' onClick={() => navigate(to)}>
                <ArrowIcon className='icons-back' />
                Назад
        </div>
    );
}