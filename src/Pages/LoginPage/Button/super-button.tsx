import React from 'react';
import Button from '../../../GlobalComponent/Buttons/buttonPrimary';
import { LoginPageType } from '../../../Types/Types';

type superButtonType = {
    text: string,
    className:string,
    loginPage: LoginPageType,
    wrongSubmitAction: () => void,
}
const superButton = ({ text, className, loginPage, wrongSubmitAction }:superButtonType) => {
    const onClickButton = (e:React.SyntheticEvent) => {
        e.preventDefault();

        if (loginPage.defaultLogin === loginPage.enteredLogin && loginPage.defaultPassword === loginPage.enteredPassword) {
            localStorage.setItem('User login', 'true');
            console.log(e.target);
            // e.target.submit();
        } else {
            wrongSubmitAction();
        }
    };

    return <Button onClick={onClickButton} text={text} className={className} />;
};

export default superButton;
