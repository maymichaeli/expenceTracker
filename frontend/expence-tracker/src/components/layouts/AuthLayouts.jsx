import React from 'react'

const AuthLayouts = ({ children }) => {
  return (
    <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <h2 className='text-lg font-medium text-black'>Expense Tracker</h2>
        {children}
    </div>
  )
}

export default AuthLayouts