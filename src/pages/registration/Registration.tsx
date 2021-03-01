import React, { useState, useEffect} from 'react';
import '../registration/Registration.css'
import logo from '../../img/logo.svg'
import CustomInput from '../../components/UI/CustomInput/CustomInput';
import CustomCheckBox from '../../components/UI/CustomCheckBox/CustomCheckBox';
import CustomButton from '../../components/UI/CustomButton/CustomButton';

const Registration = () => {
    // ХУК переменная и функция которая меняет именно эту переменную
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [passCheck, setPassCheck] = useState<string>('')
    const [check, setCheck] = useState<boolean>(false)
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    useEffect(() => {
        if (email !== '' && pass !== '' && passCheck !== '' && check) {
            setIsSubmit(false)
        } else {
            setIsSubmit(true)
        }
    }, [email, pass, passCheck, check]);

    const submit = () => {
        console.log(`вы вошли логин:${email} , пароль:${pass} , повтор:${passCheck}`)
    }

    const onChangeEmail = (text: string) => {
        setEmail(text)
    }


    return <>
        <div className={'wrapper-page'}>
            <div className="wrapper-reg">
                <div className='title'>Sign Up</div>
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
                <CustomInput
                    className={'styleEmail'}
                    value={passCheck}
                    onChange={setPassCheck}
                    placeHolder={'********'}
                    label={'Repeat password'}
                />
                <div className={'wrapperButtonCheckBox'}>
                    <CustomCheckBox
                        label={'Accept the terms'}
                        value={check}
                        onChange={setCheck}
                    />
                    <CustomButton onClick={() => submit()} disabled={isSubmit}>
                        <b>Sign Up</b>
                    </CustomButton>
                </div>
            </div>
        </div>
    </>
}

export default Registration;
