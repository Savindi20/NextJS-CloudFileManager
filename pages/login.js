import { signIn } from 'next-auth/react'
import React from 'react'

function login() {
  return (
    <div className='flex justify-center 
    items-center mt-[25%] ml-[0%] md:ml-[50%] flex-col gap-6'>
        <button className='bg-blue-400 p-2 rounded-xl text-white'onClick={()=>signIn()}>
          Sign with Google
        </button>
    </div>
  )
}

export default login
