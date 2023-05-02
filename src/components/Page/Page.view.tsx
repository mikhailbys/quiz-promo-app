import React from "react";
import './Page.styles.css';
import {Header} from "../Header";
import {Toolbar} from "../Toolbar";

export const Page = (props: any) => {
    return (
        <div className='page-container'>
            <Header/>
            <div className='page-layout'>
                {props.children}
            </div>
            <Toolbar />
        </div>
    );
};