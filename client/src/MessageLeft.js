import React from 'react'
import { Avatar } from '@material-ui/core'
import './MessageLeft.css'

function MessageLeft({text, photoURL}) {
   return (
      <div className="message_left">
         <Avatar src={photoURL} />
         <p>{text}</p>
      </div>
   )
}

export default MessageLeft
