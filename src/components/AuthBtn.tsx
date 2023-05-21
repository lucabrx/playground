"use client"
import { signIn, signOut } from 'next-auth/react';
import { type FC } from 'react';

interface LoginBtnProps {
  session? : SafeUser | null
}

const AuthBtn: FC<LoginBtnProps> = ({session}) => {
  return (
 <>
 {
    session ? (
        <button 
        className='p-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700'
        onClick={() => signOut()}>signout
        </button>
    ) : (
      <button 
      className='p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700'
      onClick={() => signIn("github")}>signin
      </button>
  ) 
 }
 </>
)
}

export default AuthBtn