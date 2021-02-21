import React from 'react';
import './CustomCheckBox.css'

import {
    BrowserRouter as Router,
    useParams,
    Link
} from "react-router-dom";
interface CustomCheckBoxProps {
    value: boolean
    onChange: (value:boolean) => void
    label?: string
    className?: string
}
const CustomCheckBox = (props:CustomCheckBoxProps) => {

    const { value, onChange, label, className = ''} = props

    return <>
        <div className={`wrapperCheckBox ${className}`}>
            <input type="checkbox" onChange={() => onChange(!value)} checked={value} />{label && <div>{label}</div>}
        </div>
    </>
}

export default CustomCheckBox;
