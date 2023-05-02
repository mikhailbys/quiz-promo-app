import React from "react";
import './Link.styles.css';

interface Props {
    href?: string;
    label: string;
}

export const Link = ({ label, href = '' }: Props) => {
    return (
        <div className='anchor-link-container'>
            <a className='anchor-link' href={href}>{label}</a>
        </div>
    );
}