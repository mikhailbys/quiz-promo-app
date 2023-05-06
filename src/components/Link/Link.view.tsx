import React, {AnchorHTMLAttributes} from "react";
import './Link.styles.css';

interface Props extends AnchorHTMLAttributes<any>{
    label: string;
    href?: string;
}
export const Link = ({ label, href = '', ...props }: Props) =>
        <div className='anchor-link-container'>
            <a {...props} className='anchor-link' href={href}>{label}</a>
        </div>;