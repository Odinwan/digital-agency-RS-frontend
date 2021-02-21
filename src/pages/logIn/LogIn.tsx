import React, { useState} from 'react';
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

    const submit = () => {

    console.log('вы вошли')

    }

    return <>
        <div className={'wrapper-page'}>
            <div className="wrapper-log-in">
                <div className='title'>Авторизация</div>
                <img src={logo} alt="logo"/>
                <CustomInput
                    className={'styleEmail'}
                    value={email}
                    onChange={setEmail}
                    placeHolder={'example@mail.ru'}
                    label={'Логин или эл. адресс'}
                />
                <CustomInput
                    className={'styleEmail'}
                    value={pass}
                    onChange={setPass}
                    placeHolder={'Введите пароль'}
                    label={'Пароль'}
                />
                <div className={'wrapperButtonCheckBox'}>
                    <CustomCheckBox
                        label={'Вы согласны с правилами?'}
                        value={check}
                        onChange={setCheck}
                    />
                    <CustomButton onClick={() => submit()} disabled={false}>
                        <b>Войти</b>
                    </CustomButton>
                </div>
            </div>
        </div>
    </>
}

export default LogIn;
