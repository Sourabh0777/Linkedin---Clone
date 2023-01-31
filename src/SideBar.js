import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import "./SideBar.css"

function SideBar() {
    const user = useSelector((state)=>state.user.value);
    const recemtItems = (topic)=>(
        <div className="sidebar_receintItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <Avatar className='sidebar_avatar'/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_sate">
                    <p>Who viewed you</p>
                    <p className='sidebar_sateNumber'>2,569</p>
                </div>
                <div className="sidebar_sate">
                    <p>Views on post</p>
                    <p className='sidebar_sateNumber'>288</p>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recemtItems("React.js")}
                {recemtItems("Progamming")}
                {recemtItems("Software Engineer")}
                {recemtItems("Developer")}
            </div>
        </div>
    )
}

export default SideBar