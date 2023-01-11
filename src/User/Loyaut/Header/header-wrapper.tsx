import React from 'react'
import { NavLink } from 'react-router-dom'
import { userStatusAction } from "../../../App/Reducers/loginPage/loginReducer.ts";

export default function HeaderLoyaut({loginPage, dispatch}) {
    let logaut = () =>{
        localStorage.setItem("User login", 'false')
        dispatch(userStatusAction())
      }
  return (
    <header className="header">
        <div className="header__wrapper">
            {
                loginPage.userStatus === 'true'
                ? <NavLink to="/account" className="header__item">Account</NavLink>
                : <NavLink to="/login" className="header__item">Login</NavLink>
            }
            <NavLink to="/table" className="header__item">Table</NavLink>
        </div>
        {
            loginPage.userStatus === 'true'
            ? <div onClick={logaut} className="header__logout">Logout</div>
            : null
        }
    </header>
  )
}
