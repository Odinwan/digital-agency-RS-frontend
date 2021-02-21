import React from 'react';
import './CustomButton.css'

import {
    BrowserRouter as Router,
    useParams,
    Link
} from "react-router-dom";
interface CustomButtonProps {
    onClick: () => void
    children: any
    className?: string
    disabled?: boolean
}
const CustomButton = (props:CustomButtonProps) => {

    const { onClick, children, className = '', disabled} = props

    return <>
        <button 
            className={`${className} customButton`} 
            disabled={false} 
            onClick={() => onClick()}
        >
            {children}
        </button>
    </>
}

export default CustomButton;
