import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchBar from '../components/SearchBar';

export default function Home() {
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
    <div className='p-5'>
      <SearchBar/>
    </div>
  )

}