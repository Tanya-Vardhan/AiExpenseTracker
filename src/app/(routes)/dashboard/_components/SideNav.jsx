import React, {useEffect} from 'react'
import Image from 'next/image' 
import {
    LayoutGrid,
    PiggyBank,
    ReceiptText,
    ShieldCheck,
    CircleDollarSign,
    IndianRupee,
} from 'lucide-react';

import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

 function SideNav() {
    const menuList=[
        {
            id:1,
            name:"Dashboard",
            icon:LayoutGrid,
            path:'/dashboard'
        },
        {
            id:2,
            name:"Incomes",
            icon:IndianRupee,
            path:'/dashboard/incomes'
        },
        {
            id:3,
            name:"Budgets",
            icon:PiggyBank,
            path:'/dashboard/budgets'
        },
        {
            id:4,
            name:"Expenses",
            icon:ReceiptText,
            path:'/dashboard/expenses'
        },
        {
            id:5,
            name:"Upgrade",
            icon:ShieldCheck,
            path:'/dashboard/upgrade' 
        }
    ];
    const path = usePathname();
    useEffect(()=>{
        console.log(path);
    },[path]);

    return(
        <div className='h-screen p-5 border shadow-sm'>
            <div className='flex items-center'>
                <Image src="/expenseTracker.png" alt='logo' width={50} height={50}/>
                <span className='text-green-900 font-bold text-xl'>ExpenseTracker</span>
            </div>
            <div className='m-2 pt-4'>
                {menuList.map((menu,index)=> (
                   <Link href={menu.path} key={index}>
                    <h2
                    className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-4 cursor-pointer rounded-full hover:text-primary hover:bg-green-600 ${path==menu.path && "text-primary bg-green-700"}`}>
                        <menu.icon/>
                        {menu.name}
                    </h2>
                   </Link> 
                ))}
            </div>
            <div
            className='fixed bottom-10 p-5 flex gap-2 items-center'>
                <UserButton />
                Profile
            </div>
        </div>
    );
}

export default SideNav;