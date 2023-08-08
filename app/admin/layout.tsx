import React from 'react';
import Link from 'next/link';
import { myVar } from '@/styles/fonts/fonts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ShieldIcon from '@mui/icons-material/Shield';
import AdminNavbar from '@/components/ui/AdminNavbar';
import AdminSwitchTheme from '@/components/ui/AdminSwitchTheme';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-row overflow-y-hidden">
      <div className="sidebar flex-1 border-r-[0.5px] border-[#E6E3E3] min-h-screen bg-white">
        <div className="top h-[80px] flex items-center justify-center">
          <Link href="/" className={`logo ${myVar.className} text-3xl text-primary-blue`}>Versatility</Link>
        </div>
        <hr className="h-[0.5px] border-[#E6E3E3]" />
        <div className="center pl-[10px]">
          <ul className="m-0 p-0">
            <p className="title">MAIN</p>
            <li className="admin-li">
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li className="admin-li">
                <PersonOutlineOutlinedIcon className="icon" />
                <span>Users</span>
            </li>
            <li className="admin-li">
                <NewspaperIcon className="icon" />
                <span>Posts</span>
            </li>
            <li className="admin-li">
                <PeopleAltIcon className="icon" />
                <span>Creators</span>
            </li>
            <p className="title">USEFUL</p>
            <li className="admin-li">
                <AssessmentIcon className="icon" />
                <span>Stats</span>
            </li>
            <li className="admin-li">
                <FormatListBulletedIcon className="icon" />
                <span>To-do List</span>
            </li>
            <li className="admin-li">
                <NotificationsNoneIcon className="icon" />
                <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li className="admin-li">
                <AddIcon className="icon" />
                <span>Create Post</span>
            </li>
            <li className="admin-li">
                <EditIcon className="icon" />
                <span>Edit Post</span>
            </li>
            <li className="admin-li">
                <ShieldIcon className="icon" />
                <span>Moderate Post</span>
            </li>
            <p className="title">USER</p>
            <li className="admin-li">
                <SettingsSuggestIcon className="icon" />
                <span>Settings</span>
            </li>
            <li className="admin-li">
                <AccountBoxIcon className="icon" />
                <span>Profile</span>
            </li>
            <li className="admin-li">
                <LogoutIcon className="icon" />
                <span>Logout</span>
            </li>
          </ul>
        </div>
        <AdminSwitchTheme />
      </div>
      <div className="flex-[6]">
        <AdminNavbar />
        {children}
      </div>
    </div>
  )
}

export default Layout