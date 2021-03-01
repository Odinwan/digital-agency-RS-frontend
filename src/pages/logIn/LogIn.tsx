import React, { useState,useEffect} from 'react';
import './LogIn.css'
import logo from '../../img/logo.svg'
import CustomInput from './../../components/UI/CustomInput/CustomInput';
import CustomCheckBox from './../../components/UI/CustomCheckBox/CustomCheckBox';
import CustomButton from './../../components/UI/CustomButton/CustomButton';

const LogIn = () => {
    // ХУК переменная и функция которая меняет именно эту переменную
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [check, setCheck] = useState<boolean>(false)
    const [isSubmit, setIsSubmit] = useState<boolean>(true)

    useEffect(() => {
        if (email !== '' && pass !== '' && check) {
            setIsSubmit(false)
        } else {
            setIsSubmit(true)
        }
    }, [email,pass,check]);

    const submit = () => {
        console.log(`вы вошли логин:${email} , пароль:${pass}`)
    }

    const onChangeEmail = (text: string) => {
        setEmail(text)
    }

    return <>
        <div className={'wrapper-page'}>
            <div className="wrapper-log-in">
                <div className='title'>Sign In</div>
                <img src={logo} alt="logo"/>
                <CustomInput
                    className={'styleEmail'}
                    value={email}
                    onChange={onChangeEmail}
                    placeHolder={'example@email.com'}
                    label={'E-mail'}
                />
                <CustomInput
                    className={'styleEmail'}
                    value={pass}
                    onChange={setPass}
                    placeHolder={'********'}
                    label={'Password'}
                />
                <div className={'wrapperButtonCheckBox'}>
                    <CustomCheckBox
                        label={'Accept the terms'}
                        value={check}
                        onChange={setCheck}
                    />
                    <CustomButton onClick={() => submit()} disabled={isSubmit}>
                        <b>Sign In</b>
                    </CustomButton>
                </div>
            </div>
        </div>
    </>
}

export default LogIn;
