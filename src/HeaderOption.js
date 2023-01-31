import React from 'react'
import "./headerOption.css"

import Avatar from '@mui/icons-material/AccountCircleRounded';

function headerOption({ avatar, Icon, title,logout }) {
  return (
    <div onClick={logout} className='headerOption'>
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (<Avatar className="headerOption_icon" src={avatar} />)}
      <h3 className='headerOption_title'>{title} </h3>
    </div>
  )
}

export default headerOption;