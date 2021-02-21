import React from 'react';
import './CustomInput.css'

import {
    BrowserRouter as Router,
    useParams,
    Link
} from "react-router-dom";
interface CustomInputProps {
    value: string
    onChange: (value:string) => void
    placeHolder?: string
    label?: string
    className?: string
}
const CustomInput = (props:CustomInputProps) => {

    const { value, onChange, placeHolder, label, className = ''} = props

    return <>
        <div className={`wrapperInput ${className}`}>
            {label && <label htmlFor="input">{label}</label>}
            <input 
                type="text" 
                value={value} 
                onChange={(e) => onChange(e.target.value)} 
                id='input' 
                placeholder={placeHolder} 
            />
            
        </div>
    </>
}

export default CustomInput;
