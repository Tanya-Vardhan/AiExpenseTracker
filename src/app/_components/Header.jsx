'use client'
import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import { useUser, UserButton } from '@clerk/clerk-react'
import  Link from 'next/link'

export default function Header() {
    const{user, isSignedIn }=useUser(); 
    return(
        <div className='flex justify-between p-5 items-center shadow-sm'>
            <div className='flex items-center'>
                <Image src='/expenseTracker.png' alt='logo' width={50} height={50}/>
                <span className='text-green-900 font-bold text-xl'>ExpenseTracker</span>
            </div>
          {isSignedIn? (
          <UserButton/>
          ) : (
            <div className='flex gap-3'>
               <Link href="/dashboard">
                  <Button variant='outline' className='rounded-l'> Dashboard</Button>
                </Link>
                <Link href="/dashboard">
                  <Button className='rounded-l bg-green-800 hover:bg-green-900'> Get Started</Button>
                </Link>
           </div>
          ) }
           
        </div>
    );
}