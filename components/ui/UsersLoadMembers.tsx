import React from 'react';
import useSWR from 'swr';
import { fetchAllUsers } from '@/swrFetch/fetch';
import Image from 'next/image';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const UsersLoadMembers = () => {

    const { data, error, isLoading } = useSWR('/api/getusers', fetchAllUsers);
    const router = useRouter();

    const handleClickView = (id: string) => {
        router.push(`/admin/users/${id}`);
        console.log(id);
    }

  return (
    <div className="box-border">
        {data && data.map((lists: any, index: any) => (
            <div key={index} className="flex flex-row w-full pl-5 pr-5 h-[90px] box-border border-b cursor-pointer transition">
                <div className="w-[90px] flex justify-center items-center text-[#A6AAB1] text-lg font-sans">
                    <div>#{++index}</div>
                </div>
                <div className="w-[300px] flex justify-center items-center text-[#A6AAB1] text-lg font-sans">
                    <div>{lists.node.name}</div>
                </div>
                <div className="w-[300px] flex justify-center items-center text-[#A6AAB1] text-lg font-sans">
                    <div>{lists.node.email}</div>
                </div>
                <div className="w-[150px] flex justify-center items-center text-[#A6AAB1] text-lg font-sans">
                    <div>
                        <Image src={lists.node.avatarUrl} className="rounded-full" width={40} height={40} alt="avatar" />
                    </div>
                </div>
                <div className="w-[150px]  flex justify-center items-center text-[#A6AAB1] text-lg font-sans">
                    <div>{lists.node.isAdmin ? "Да" : "Нет"}</div>
                </div>
                <div className="w-[150px]  flex justify-center items-center text-[#A6AAB1] text-lg font-sans">
                    <div>{lists.node.isModer ? "Да" : "Нет"}</div>
                </div>
                <div className="w-[150px]  flex justify-center items-center text-[#A6AAB1] text-lg font-sans">
                    <div>{lists.node.regDate}</div>
                </div>
                <div className="w-[300px] flex justify-center items-center text-[#A6AAB1] text-lg font-sans gap-4">
                    <div 
                        className="w-12 h-12 text-[#3A9CFA] bg-[#F1F8FE] rounded-full flex justify-center items-center"
                        onClick={() => {handleClickView(lists.node.id)}}
                    >
                        <RemoveRedEyeOutlinedIcon />
                    </div>
                    <div className="w-12 h-12 text-[#ffa500] bg-[#FFF7E6] rounded-full flex justify-center items-center">
                        <FiEdit />
                    </div>
                    <div className="w-12 h-12 text-[#dc143c] bg-[#FDEEF1] rounded-full flex justify-center items-center">
                        <AiOutlineDelete />
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default UsersLoadMembers