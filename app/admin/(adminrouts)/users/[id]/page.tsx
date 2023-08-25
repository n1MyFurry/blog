"use client";

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { fetchUserById } from '@/swrFetch/fetch';
import Preloader from '@/components/ui/Preloader';
import Chart from '@/components/ui/Chart';
import AdminTable from '@/components/ui/AdminTable';

type Props = {
  params: {
      id: string
  }
}

const AdminPersonPage = ({ params }: Props) => {

  const id = params.id;

  const { data, error, isLoading } = useSWR('/api/getuserbyid', () => {return fetchUserById(id)});

  if (isLoading) {
    return (
      <Preloader />
    );
  }

  return (
    <div className="overflow-y-scroll h-full w-full admin_self-container">
      <div className="p-5 flex gap-5">
        <div className="admin_selfleft flex-1 p-5 relative rounded-[10px]">
          <div className="absolute top-0 right-0 text-sm text-[#7451f8] bg-[#7551f818] cursor-pointer p-[5px] rounded-bl-[5px] rounded-tr-[5px]">Edit</div>
          <h1 className="text-xl text-[#d3d3d3] mb-5">Information</h1>
          <div className="flex gap-5">
            <Image className="rounded-full object-cover w-[120px] h-[120px]" src={data?.user?.avatarUrl} width={150} height={150} alt="avatar" />
            <div className="">
              <h1 className="mb-[10px] text-[#555] text-2xl">{data?.user?.name}</h1>
              <div className="mb-[10px] text-sm">
                <span className="itemKey font-bold text-[#808080] mr-[5px]">Email:</span>
                <span className="itemValue font-light">jane@gmail.com</span>
              </div>
              <div className="mb-[10px] text-sm">
                <span className="itemKey font-bold text-[#808080] mr-[5px]">Phone:</span>
                <span className="itemValue font-light">+1 2345 67 89</span>
              </div>
              <div className="mb-[10px] text-sm">
                <span className="itemKey font-bold text-[#808080] mr-[5px]">Adress:</span>
                <span className="itemValue font-light">Eltom St. 234 Gards</span>
              </div>
              <div className="mb-[10px] text-sm">
                <span className="itemKey font-bold text-[#808080] mr-[5px]">Country:</span>
                <span className="itemValue font-light">USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="admin_selfright flex-[3]">
          <Chart aspect={6 / 1} title="User Activity" />
        </div>
      </div>
      <div className="admin_selfbottom p-5 mx-5 my-[10px] rounded-[10px] mb-[100px]">
        <AdminTable />
      </div>
    </div>
  )
}

export default AdminPersonPage