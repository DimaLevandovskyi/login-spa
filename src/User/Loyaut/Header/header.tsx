import React from 'react'
import HeaderLoyaut from "./header-wrapper.tsx";


export default function Header({loginPage, dispatch}) {

  return (
    <HeaderLoyaut
    loginPage={loginPage}
    dispatch={dispatch} />
  )
}
