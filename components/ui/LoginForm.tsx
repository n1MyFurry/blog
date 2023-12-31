"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { RiLockPasswordFill } from 'react-icons/ri';
import { MdAlternateEmail } from 'react-icons/md';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Button from './Button';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(`${email}, ${password}`);
        signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
        }).then((res) => {
        if(res?.error) {
            console.log(res.error);
        } else {
            router.refresh();
            router.push('/');
        }
        })
    }

  return (
    <div className="w-1/2 h-full flex flex-col items-center relative">
        <Link href="/" className="absolute top-10 left-20 px-4 py-4 rounded-md bg-[#F7FAFC] colo"><AiOutlineArrowLeft color="#173562" size={20} /></Link>
        <div className="py-5 px-1 mt-20 rounded-full border-auth-border border-2 pointer-events-none">
          <Image
            src="/logo.svg"
            width={100}
            height={35}
            alt="logo"
          />
        </div>
        <h1 className="text-5xl mt-10 font-normal">Hello Again!</h1>
        <p className="max-w-lg mt-5 text-center font-sans text-[#C8C8CF]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui beatae rem fugit optio dolor.</p>
        <form action="#" onSubmit={(e) => {onSubmit(e)}} id="login-form" className="flex flex-col max-w-lg w-full">
          <label 
            className="login-block w-full flex flex-row bg-auth-bg-logo border-[#E3E3E3] border-2 px-3 py-4 justify-between items-center gap-4 relative rounded-xl mt-9"
          >
            <input 
              type="text" 
              className="email-block bg-transparent outline-none w-full" 
              required 
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <span className="absolute pointer-events-none transition text-[#B8BAC3]">Email</span>
            <MdAlternateEmail color="#B8BAC3" className="login-icon" size={25} />
          </label>
          <label 
            className="login-block w-full flex flex-row bg-auth-bg-logo border-[#E3E3E3] border-2 px-3 py-4 justify-between items-center gap-4 relative rounded-xl mt-7"
          >
            <input 
              type="password" 
              className="email-block bg-transparent outline-none w-full" 
              required 
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <span className="absolute pointer-events-none transition text-[#B8BAC3]">Password</span>
            <RiLockPasswordFill color="#B8BAC3" className="login-icon" size={25} />
          </label>
          <div className="flex justify-between items-center py-4">
            <div>
              <input type="checkbox" name="jhj" id="remember_btn" className="custom-checkbox" />
              <label htmlFor="remember_btn" className="pl-1 cursor-pointer">Remember Me</label>
            </div>
            <Link href="/recovery/password" className="text-auth-slider font-semibold">Recovery password</Link>
          </div>
          <div className="flex flex-col justify-between gap-4 mt-4">
            <Button title="Login" color="text-white" bgColor="bg-primary-blue" type="submit" />
            <Button title="Sign In with Google" type="button" leftIcon="/google.svg" color="text-[#B8BAC3]" borderColor="border-[#E3E3E3]" handleClick={() => {signIn("google", {callbackUrl: "/"})}} />
          </div>
        </form>
        <p className="mt-24 text-[#C8C8CF]">
          Don't have an account yet? <Link href="/register" className="text-auth-slider font-semibold">Sign Up</Link>
        </p>
    </div>
  )
}

export default LoginForm