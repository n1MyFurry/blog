"use client";

import React, { useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

const page = () => {

  const router = useRouter();
  const [adminEmail, setAdminEmail] = useState('');

  const handleAdmin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminEmail(e.target.value);
  }

  const handleAdminBtn = async () => {
    await fetch('/api/setadmin', {
      method: 'POST',
      body: JSON.stringify({
        adminEmail
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="w-full h-full flexCenter relative">
      <div 
        className="absolute top-10 left-20 px-6 py-5 bg-dark-blue rounded-xl cursor-pointer"
        onClick={() => {router.push('/')}}
      >
        <AiOutlineArrowLeft color="#ffffff" />
      </div>
      <div className="w-1/2 h-1/2 bg-slate-200 gap-3 px-4 py-4">
        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold">Дать админку:</div>
          <input 
            type="text"
            placeholder="Email"
            className="px-4 py-3 rounded-xl outline-none"
            value={adminEmail}
            onChange={(e) => {handleAdmin(e)}}
          />
          <Button type="button" title="Сохранить" bgColor="bg-dark-blue" color="text-white" handleClick={() => {handleAdminBtn()}} />
        </div>
      </div>
    </div>
  )
}

export default page