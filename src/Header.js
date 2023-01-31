import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption"

// Import Icons
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();
  const logoutofApp = ()=>{
    console.log("This is working");
    dispatch(logout());
    signOut(auth);
  };
  return (
    <div className='header'>

      <div className="left_header">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

        <div className="header_search">
          <SearchIcon placeholder="Search"/>
          <input placeholder="Search" type="search" />
        </div>
      </div>

      <div className="right__header">
        <HeaderOption Icon={HomeIcon} title ="Home"/>
        <HeaderOption Icon={PeopleAltIcon} title ="My Network"/>
        <HeaderOption Icon={WorkIcon} title ="JOb"/>
        <HeaderOption Icon={MessageIcon} title ="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title ="Notification"/>
        <HeaderOption avatar="https://photos.app.goo.gl/88nEhiB4eLBtNMKW8" title ="Me" logout={logoutofApp}/>
      </div>
    </div>
  )
}

export default Header