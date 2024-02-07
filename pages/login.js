import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react'

function login() {
  const {data:session}=useSession();
  const router=useRouter();

  useEffect(()=>{
    console.log("User Session",)
    if(!session)
    {
      router.push("/")
    }
    else{
      console.log("User Session",session.user)
    }

  },[session])

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
