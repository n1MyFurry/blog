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
    <div className="w-full h-full flex flex-row">
      <div className="sidebar flex-1 border-r-[0.5px] border-[#E6E3E3] min-h-screen bg-white">
        <div className="top h-[80px] flex items-center justify-center">
          <Link href="/" className={`logo ${myVar.className} text-3xl text-primary-blue`}>Versatility</Link>
        </div>
        <hr className="h-[0.5px] border-[#E6E3E3]" />
        <div className="center pl-[10px]">
          <ul className="m-0 p-0">
            <p className="title">MAIN</p>
            <li className="admin-li">
              <Link href="/admin">
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </Link>
            </li>
            <p className="title">LISTS</p>
            <li className="admin-li">
              <Link href="/admin/users">
                <PersonOutlineOutlinedIcon className="icon" />
                <span>Users</span>
              </Link>
            </li>
            <li className="admin-li">
              <Link href="/admin/posts">
                <NewspaperIcon className="icon" />
                <span>Posts</span>
              </Link>
            </li>
            <li className="admin-li">
              <Link href="/admin/creators">
                <PeopleAltIcon className="icon" />
                <span>Creators</span>
              </Link>
            </li>
            <p className="title">USEFUL</p>
            <li className="admin-li">
              <Link href="/admin/stats">
                <AssessmentIcon className="icon" />
                <span>Stats</span>
              </Link>
            </li>
            <li className="admin-li">
              <Link href="/admin/todo">
                <FormatListBulletedIcon className="icon" />
                <span>To-do List</span>
              </Link>
            </li>
            <li className="admin-li">
              <Link href="/admin/adminnotifications">
                <NotificationsNoneIcon className="icon" />
                <span>Notifications</span>
              </Link>
            </li>
            <p className="title">SERVICE</p>
            <li className="admin-li">
              <Link href="/admin/createpost">
                <AddIcon className="icon" />
                <span>Create Post</span>
              </Link>
            </li>
            <li className="admin-li">
              <Link href="/admin/editpost">
                <EditIcon className="icon" />
                <span>Edit Post</span>
              </Link>
            </li>
            <li className="admin-li">
              <Link href="/admin/moderatepost">
                <ShieldIcon className="icon" />
                <span>Moderate Post</span>
              </Link>
            </li>
            <p className="title">USER</p>
            <li className="admin-li">
              <Link href="/admin/adminsettings">
                <SettingsSuggestIcon className="icon" />
                <span>Settings</span>
              </Link>
            </li>
            <li className="admin-li">
              <Link href="/admin/profile">
                <AccountBoxIcon className="icon" />
                <span>Profile</span>
              </Link>
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
        <div className="calc_admin-container relative">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout