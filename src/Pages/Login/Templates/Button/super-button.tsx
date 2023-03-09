import React from 'react';
import Button from '../../../../Templates/Buttons/buttonPrimary';
import { LoginPageType } from '../../../../Types/types';
import Prefix from '../../../../Services/Prefix-consumer/prefixConsumer';

type superButtonType = {
    text: string,
    prefix: string,
    loginPage: LoginPageType,
    wrongSubmitAction: () => void,
}
const superButton = ({ text, prefix, loginPage, wrongSubmitAction }:superButtonType) => {
    const onClickButton = (e:React.SyntheticEvent) => {
        e.preventDefault();

        if (loginPage.defaultLogin === loginPage.enteredLogin && loginPage.defaultPassword === loginPage.enteredPassword) {
            localStorage.setItem('User login', 'true');
            location.href = '/table';
        } else {
            wrongSubmitAction();
        }
    };

    return <Button onClick={onClickButton} text={text} className={`${prefix}__button button`} />;
};

export default Prefix(superButton);
