import React from 'react'
import { Avatar } from '@material-ui/core'
import './MessageRight.css'

function MessageRight({text, photoURL}) {
   return (
      <div className="message_right">
         <Avatar src={photoURL} />
         <p>{text}</p>
      </div>
   )
}

export default MessageRight
