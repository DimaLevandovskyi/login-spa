import React from 'react';
import { NavLink } from 'react-router-dom';
import { userStatusAction } from '../../../App/Reducers/loginPage/loginReducer';
import LoginPageType from '../../../Types/Types';
import { AppDispatch } from '../../../App/Redux-store/redux-store';

type HeaderLayoutType = {
    dispatch:AppDispatch,
    loginPage:LoginPageType
}
export default function HeaderLayout({ loginPage, dispatch }:HeaderLayoutType) {
    const logout = ():void => {
        localStorage.setItem('User login', 'false');
        dispatch(userStatusAction());
    };
    return (
        <header className="header">
            <div className="header__wrapper">
                {
                    loginPage.userStatus === 'true' ?
                        <NavLink to="/account" className="header__item">Account</NavLink> :
                        <NavLink to="/login" className="header__item">Login</NavLink>
                }
                <NavLink to="/table" className="header__item">Table</NavLink>
            </div>
            {
                loginPage.userStatus === 'true' ?
                    <div onClick={logout} className="header__logout">logout</div> :
                    null
            }
        </header>
    );
}
