"use client";

import React, { useState } from 'react';

const AdminSwitchTheme = () => {

    const [api, setApi] = useState('');

  return (
    <div className="flex flex-row items-center pl-2 py-1">
        <div className="w-[40px] h-[40px] rounded-[5px] border border-[#7451f8] cursor-pointer bg-[#f5f5f5] m-3"></div>
        <div className="w-[40px] h-[40px] rounded-[5px] border border-[#7451f8] cursor-pointer bg-[#333] m-3"></div>
    </div>
  )
}

export default AdminSwitchTheme