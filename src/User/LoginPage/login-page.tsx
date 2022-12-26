import React from 'react'
import "./login-page.css";
import { enterLoginAction, enterPasswordAction, userLoginAction, wrongSubmitAction } from '../../App/Reducers/loginPage/loginReducer.ts'

export default function loginPage(props) {

  let enterLogin = (login):void =>{
    props.dispatch(enterLoginAction(login))
  }

  let enterPassword = (password):void =>{
    props.dispatch(enterPasswordAction(password))
  }

  let userLogin = (e):void =>{
    e.preventDefault()
    props.dispatch(userLoginAction())

    if (props.loginPage.defaultLogin === props.loginPage.enteredLogin && props.loginPage.defaultPassword === props.loginPage.enteredPassword) {
      localStorage.setItem("User login", 'true')
      e.target.submit()
    } else {
      props.dispatch(wrongSubmitAction())
    }
  }

  return (
    <div className='login'>
        <h2 className='login__title'>Login</h2>
        {
          props.loginPage.wrongSubmit
          ? <div className='login__errors'>You entered incorrect login details</div>
          : null
        }

        <form onSubmit={(e) => {userLogin(e)}} action="/table">
          <div className="login__inputs-block">
            <input onChange={(e) => {enterLogin(e.target.value)}} placeholder='Email' className='input' type='email' value={props.loginPage.enteredLogin}/>
            {
              props.loginPage.errors.wrongLogin
              ? <div className='error'>Your Email is incorrect</div>
              : null
            }
          </div>
          <div className="login__inputs-block">
          <input onChange={(e) => {enterPassword(e.target.value)}} placeholder='Password' className='input' type='text' value={props.loginPage.enteredPassword}/>
            {
              props.loginPage.errors.wrongPassword
              ? <div className='error'>The password must have uppercase and lowercase latin letters, one symbol, numbers and length is at least 6 elements</div>
              : null
            }
          </div>
          <button className='login__button button' type='submit'>Login</button>
        </form>
    </div>
  );
}































// import {testArrayCreator} from '../App/Reducers/testArayReducer.ts'

// let showSumm = () =>{
//   props.dispatch(testArrayCreator())
// }

//  Test summ
//   <div>{props.state.numbers.number1}</div>
//   <div>{props.state.numbers.number2}</div>
//   <button onClick={showSumm}>Show summ</button>
//   <div>
//     {
//       props.state.numbers.summ != null ? props.state.numbers.summ : null
//     }
//   </div> 