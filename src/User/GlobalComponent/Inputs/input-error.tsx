import React from 'react'

export default function InputError({errorText, errorType}) {
  return (
    <>
      {
        errorType
          ? <div className='error'>{errorText}</div>
          : null
      }
    </>
  )
}
