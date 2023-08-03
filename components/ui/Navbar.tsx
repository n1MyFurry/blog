"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { navLinks } from '@/constants';

const Navbar = () => {

    const router = useRouter();

  return (
    <nav className="navbar flex justify-between items-center">
        <div className="flex-1 flex justify-start items-center gap-9">
            <Link href="/">
                <Image
                    src="/logo.svg"
                    width={115}
                    height={43}
                    alt="logo"
                />
            </Link>
            {navLinks.map((link) => (
                <Link href={link.href} key={link.href} className="font-semibold">{link.text}</Link>
            ))}
        </div>
        <div className="flex justify-between gap-5 items-center px-5">
            <input 
                type="text" 
                className="text-gray-300 px-6 py-3 bg-blue-400/10 rounded-lg outline-none w-[300px] text-black"
                placeholder="Search"
            />
            <Button title="Log In" type="button" handleClick={() => {router.push('/login')}} />
            <Button title="Sign Up" type="button" bgColor='bg-primary-blue' color='text-white' handleClick={() => {router.push('/register')}} />
        </div>
    </nav>
  )
}

export default Navbar