import { useSession } from 'next-auth/react'
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchBar from '../components/SearchBar';
import { ParentFolderIdContext } from '../context/ParentFolderIdContext';
import { ShowToastContext } from '../context/ShowToastContext';

export default function Home() {
  const {data:session}=useSession();
  const router=useRouter();

  const {setParentFolderId}=useContext(ParentFolderIdContext)
  const {showToastMsg}=useContext(ShowToastContext);

  useEffect(()=>{
    console.log("User Session",)
    if(!session)
    {
      router.push("/login")
    }
    else{

      console.log("User Session",session.user)
    }
    setParentFolderId(0);

  },[session,showToastMsg])

  return (
    <div className='p-5'>
      <SearchBar/>
    </div>
  )

}