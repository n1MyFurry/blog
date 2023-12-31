import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';
import { navLinks } from '@/constants';
import { getCurrentUser } from '@/lib/session';
import AuthUserData from './AuthUserData';
import { myVar } from '@/styles/fonts/fonts';

const Navbar = async () => {

    const session = await getCurrentUser();

  return (
    <nav className="navbar flex justify-between items-center">
        <div className="flex-1 flex justify-start items-center gap-9">
            <Link 
                href="/"
                className={`flex flex-row justify-center items-center gap-2 ${myVar.className} text-4xl`}
            >
                <Image
                    src="/logo.svg"
                    width={115}
                    height={43}
                    alt="logo"
                />
                <span className="text-primary-blue">Versatility</span>
            </Link>
            <div className="ml-10 flex flex-row justify-start items-center gap-5">
                {navLinks.map((link, index) => (
                    <Link href={link.href} key={index} className="font-semibold">{link.text}</Link>
                ))}
            </div>
        </div>
        <div className="flex justify-between gap-5 items-center px-5">
            <input 
                type="text" 
                className="px-6 py-3 bg-blue-400/10 rounded-lg outline-none w-[300px] text-black"
                placeholder="Search"
            />
            {session?.user?.isAdmin && (
                <Link href="/admin" className="px-5 py-3 bg-dark-blue text-white rounded-xl">
                    Admin Panel
                </Link>
            )}
            {session ? (
                <>
                    <AuthUserData name={session?.user?.name} img={session?.user?.avatarUrl} />
                </>
            ): (
                <>
                    <Link 
                        href="/login"
                        className="flex justify-center items-center gap-4 px-4 py-3 text-primary-text rounded-lg text-lg font-medium max-md:w-full box-border"
                    >
                        Log In
                    </Link>
                    <Link 
                        href="/register"
                        className="flex justify-center items-center gap-4 px-4 py-3 text-white bg-primary-blue rounded-lg text-lg font-medium max-md:w-full box-border"
                    >Sign Up</Link>
                </>
            )}
        </div>
    </nav>
  )
}

export default Navbar