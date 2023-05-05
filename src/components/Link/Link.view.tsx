import React, {AnchorHTMLAttributes} from "react";
import './Link.styles.css';

interface Props extends AnchorHTMLAttributes<any>{
    href?: string;
    label: string;
}

export const Link = ({ label, href = '', ...props }: Props) => {
    return (
        <div className='anchor-link-container'>
            <a {...props} className='anchor-link' href={href}>{label}</a>
        </div>
    );
}