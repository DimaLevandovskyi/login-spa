import React from 'react'

export default function LoginErrors({loginPage}) {
  return (
    <>
        {
            loginPage.wrongSubmit
            ? <div className='login__errors'>You entered incorrect login details</div>
            : null
        }
    </>
  )
}
