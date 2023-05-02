import React from "react";
import './Card.styles.css';

interface Props {
    children: React.ReactElement;
}

export const Card = ({ children, ...props }: Props) => {
    return (
        <div className='card-container' {...props}>
            {children}
        </div>
    );
}