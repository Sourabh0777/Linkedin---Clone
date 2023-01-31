import { Avatar } from '@mui/material'
import React, { useState , forwardRef } from 'react'
import InputOptions from './InputOptions'
import "./Post.css"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Posts({name,description,message,photoURL}) {
  return (
    <div className='post'>
      <div className="post_header">
        <Avatar/>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
      <InputOptions title="Like" Icon={ThumbUpOutlinedIcon} color="grey"/>
      <InputOptions title="Comment" Icon={SmsOutlinedIcon} color="grey"/>
      <InputOptions title="Share" Icon={ShareOutlinedIcon} color="grey"/>
      <InputOptions title="Send" Icon={SendOutlinedIcon} color="grey"/>

      </div>
    </div>
  )
}

export default Posts