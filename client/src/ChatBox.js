import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import './ChatBox.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';
import RemoveIcon from '@material-ui/icons/Remove';
import CloseIcon from '@material-ui/icons/Close';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MessageLeft from './MessageLeft';
import MessageRight from './MessageRight';
import MicIcon from '@material-ui/icons/Mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import db from './firebase'
import { useStateValue } from './StateProvider'
import firebase from 'firebase'

function ChatBox({recieved, src, fullname}) {
   const [{ user }, dispatch] = useStateValue()
   const [messages, setMessages] = useState([])
   const [message, setMessage] = useState('')
   const [user_received, setReceived] = useState('')
   const [user_send, setSend] = useState('')
   useEffect(() => {
      db.collection('messenger')
         .orderBy('time')
         .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map((doc) => ({
               id: doc.id,
               data: doc.data()
            })))
         })
      scroll()
   }, [messages.length])

   const handleSubmit = (e) => {
      e.preventDefault();
      db.collection('messenger').add({
         message: message,
         user_received: user_received,
         user_send: user_send,
         time: firebase.firestore.FieldValue.serverTimestamp()
      })
      setMessage('')
      setReceived('')
      setSend('')
   }

   const scroll = () => {
      const chat_box = document.getElementById("chat_form_" + recieved)
      if (chat_box != null) chat_box.scrollTop = chat_box.scrollHeight;
   }

   return (
      <div className="chat_box" id={recieved}>
         <div>
            <div className="header_chatBox">
               <div className="header_left">
                  <Avatar src={src} />
                  <p>{fullname}</p>
               </div>
               <div className="header_right">
                  <div className="icon_option">
                     <VideocamIcon />
                  </div>
                  <div className="icon_option">
                     <CallIcon />
                  </div>
                  <div className="icon_option">
                     <RemoveIcon />
                  </div>
                  <div className="icon_option">
                     <CloseIcon
                        onClick={e => (
                           document.getElementById(recieved).style.display = 'none'
                        )}
                     />
                  </div>
               </div>
            </div>
            <div className="chat_form" id={"chat_form_" + recieved}>
               {
                  messages.map(message => (
                     ((user.email === message.data.user_send) && (recieved === message.data.user_received)) ? (
                        <MessageRight
                           text={message.data.message}
                           photoURL={user.photoURL}
                        />
                     ) : (
                        ((user.email === message.data.user_received) && (recieved === message.data.user_send)) ? (
                           <MessageLeft
                              text={message.data.message}
                              photoURL={src}
                           />
                        ) : (null)
                     )
                  ))
               }
            </div>
            <div className="footer_chatBox">
               <div className="footer_left">
                  <div className="footer_option">
                     <AddCircleIcon />
                  </div>
                  <div className="footer_option">
                     <PhotoLibraryIcon />
                  </div>
                  <div className="footer_option">
                     <MicIcon />
                  </div>
                  <div className="footer_option">
                     <AttachFileIcon />
                  </div>
                  <div className="footer_input">
                     <form>
                        <input
                           value={message}
                           placeholder="Aa"
                           type="text"
                           onChange={e => (
                              setMessage(e.target.value),
                              setReceived(recieved),
                              setSend(user.email)
                           )}
                        />
                        <button onClick={handleSubmit} type="submit">
                           Hidden submit
                        </button>
                     </form>
                     <div className="footer_icon_smile">
                        <EmojiEmotionsIcon />
                     </div>
                  </div>
                  <div className="footer_option">
                     <ThumbUpAltIcon />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChatBox
