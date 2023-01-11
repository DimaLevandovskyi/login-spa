import React from 'react'
import LoginWrapper from './login-wrapper.tsx'
import LoginForm from './login-form.tsx'
import LoginErrors from './login-errors.tsx'
import Heading from '../../User/GlobalComponent/Heading/heading.tsx'

export default function LoginPage({dispatch, loginPage}) {

  return (
    <LoginWrapper>
      <Heading className='login__title' heading='Login'/>
      <LoginErrors 
      loginPage={loginPage} />
      <LoginForm 
        loginPage={loginPage}
        dispatch={dispatch} />
    </LoginWrapper>
  );
}