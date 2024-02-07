import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const {data:session}=useSession();
  const router=useRouter();

  useEffect(()=>{
    console.log("User session",session.user)
    if(!session){
      router.push("/login")
    }
  },[session])  
  return (
    <div className={styles.container}>
      
    </div>
  )
}