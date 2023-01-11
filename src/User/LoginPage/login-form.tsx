import React from 'react'
import {userLoginAction, wrongSubmitAction } from '../../App/Reducers/loginPage/loginReducer.ts'
import Button from '../GlobalComponent/Buttons/buttonPrimary.tsx'
import InputLoginWithErrorConnect from './Login-inputs/input-login.tsx'
import InputPasswormWithErrorConnect from './Login-inputs/input-password.tsx'


export default function LoginForm({ dispatch, loginPage }) {

    const userLogin = (e): void => {
        e.preventDefault()
        dispatch(userLoginAction())

        if (loginPage.defaultLogin === loginPage.enteredLogin && loginPage.defaultPassword === loginPage.enteredPassword) {
            localStorage.setItem("User login", 'true')
            e.target.submit()
        } else {
            dispatch(wrongSubmitAction())
        }
    }
    
    return (
        <form onSubmit={(e) => { userLogin(e) }} action="/table">
            <InputLoginWithErrorConnect/>
            <InputPasswormWithErrorConnect/>
            <Button 
                className='login__button button'
                type='submit'
                text='Login' />
        </form>
    )
}



