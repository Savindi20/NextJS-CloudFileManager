import { signIn } from 'next-auth/react'
import React from 'react'

function login() {
  return (
    <div className='flex justify-center item-center mt-[50%]'>
        <button className='bg-blue-400 p-2 rounded-xl px-3 text-white'
        onClick={()=> signIn}>
            Loging with Google
        </button>
    </div>
  )
}

export default login
