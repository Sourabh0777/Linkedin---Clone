import { color } from '@mui/system'
import React from 'react'
import "./InputOptions.css"


function InputOptions({title, Icon,color}) {
    return (
        <div className='input_options'>
            <Icon style={{color:color}} />
            <p>{title}</p>
        </div>
    )
}

export default InputOptions