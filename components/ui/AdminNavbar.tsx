import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Image from 'next/image';
import AdminAvatar from './AdminAvatar';

const AdminNavbar = async () => {
  return (
    <div className="h-[81px] border-b-[0.5px] border-[#E7E4E4] flex items-center text-[14px] text-[#555]">
        <div className="flex items-center p-5 justify-between w-full">
            <div className="flex items-center border-[0.5px] border-[#d3d3d3] p-[3px]">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="outline-none bg-transparent placeholder:text-[16px]"
                />
                <SearchOutlinedIcon />
            </div>
            <div className="flex items-center gap-7">
                <div className="item gap-2">
                    <LanguageOutlinedIcon className="text-[28px]" />
                    English
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className="text-[28px]" />
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className="text-[28px]" />
                </div>
                <div className="item relative">
                    <NotificationsNoneIcon className="text-[28px]" />
                    <div  className="w-5 h-5 bg-red-600 rounded-full text-white flex items-center justify-center text-[10px] font-bold absolute -top-2 -right-1">1</div>
                </div>
                <div className="item relative">
                    <ChatBubbleOutlineOutlinedIcon className="text-[28px]" />
                    <div className="w-5 h-5 bg-red-600 rounded-full text-white flex items-center justify-center text-[10px] font-bold absolute -top-2 -right-1">2</div>
                </div>
                <div className="item">
                    <FormatListBulletedIcon className="text-[28px]" />
                </div>
                <AdminAvatar />
            </div>
        </div>
    </div>
  )
}

export default AdminNavbar