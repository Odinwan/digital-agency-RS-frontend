import React, { useState} from 'react';
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

    return <>
        <div className={'wrapper-page'}>
            <div className="wrapper-reg">
                <div className='title'>Регистрация</div>
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
                <CustomInput
                    className={'styleEmail'}
                    value={passCheck}
                    onChange={setPassCheck}
                    placeHolder={'Повторите пароль'}
                    label={'Пароль'}
                />
                <div className={'wrapperButtonCheckBox'}>
                    <CustomCheckBox
                        label={'Вы согласны с правилами?'}
                        value={check}
                        onChange={setCheck}
                    />
                    <CustomButton onClick={() => alert('вы зарегестрировались')} disabled={!check}>
                        <b>Зарегистрироваться</b>
                    </CustomButton>
                </div>
            </div>
        </div>
    </>
}

export default Registration;
