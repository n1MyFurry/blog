"use client";

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { fetchAllUsers } from '@/swrFetch/fetch';
import { adminUsersTableHeader } from '@/constants';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import UsersLoadMembers from '@/components/ui/UsersLoadMembers';

const AdminUsers = () => {
  return (
    <div className="w-full h-full max-h-full box-border flex flex-col items-center p-5">
      <div className="adminuserslist w-full h-[90%] flex flex-col rounded-[10px] overflow-hidden overflow-y-scroll">
        <div className="w-full h-[80px] box-border bg-[#F1F8FE]">
          <div className="flex flex-row pl-5 pr-5 w-full h-[80px]">
            {adminUsersTableHeader.map((list, index) => (
              <div key={index} className={`h-full w-[${list.width}] flex justify-center items-center cursor-pointer`}>
                <div className="hover:bg-[#BCDEFA] flex justify-center items-center gap-2 p-3 transition rounded-md">
                  {(list.name !== "Avatar" && list.name !== "Options") ? (<UnfoldMoreIcon className="text-2xl font-bold text-[#5B6777]" />) : ''}
                  <span className="text-lg font-bold text-[#5B6777]">{list.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <UsersLoadMembers />
      </div>
    </div>
  )
}

export default AdminUsers