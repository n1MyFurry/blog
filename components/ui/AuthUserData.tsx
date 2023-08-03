"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

type Props = {
    name: string;
    img: string;
}

const AuthUserData = ({ name, img }: Props) => {

    const [show, setShow] = useState(false);

    const handleProfile = () => {
        setShow(!show);
    }

  return (
    <>
        <span>Hello, {name}!</span>
        <Image
            src={img}
            width={50}
            height={50}
            alt="avatar"
            className="rounded-full cursor-pointer relative"
            onClick={() => {handleProfile()}}
        />
        <div className={`absolute w-[350px] h-[300px] bg-white right-8 top-24 z-[999] ${show ? 'block' : 'hidden'} rounded-xl border-primary-blue border flex flex-col justify-start items-center gap-9`}>
            <Image
                src={img}
                width={70}
                height={70}
                alt="avatar"
                className="rounded-full cursor-pointer relative top-5"
            />
            <span className="font-semibold">{name}</span>
            <span onClick={() => {signOut({callbackUrl: '/'})}}>Log Out</span>
        </div>
    </>
  )
}

export default AuthUserData