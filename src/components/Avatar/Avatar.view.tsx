import React from "react";
import './Avatar.styles.css';

interface Props {
    src?: string;
}

export const Avatar = ({ src }: Props) => {
    return (
        <img className='avatar' src={src !== '' ? src : require('./static/avatar.jpeg')} alt="Avatar"/>
    );
}