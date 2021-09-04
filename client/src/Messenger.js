import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import './Messenger.css'
import ChatBox from './ChatBox.js'
import { useStateValue } from './StateProvider'
import { realtimeDB } from './firebase'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Messenger() {

   const [{ user }, dispatch] = useStateValue()
   var list = [];
   const [users, setUsers] = useState([])

   useEffect(() => {
      realtimeDB.ref('users')
         .on("child_added", snapshot => {
            list.push(snapshot.val())
            setUsers(list.map((doc) => ({
               data: doc
            })))
         })
   }, [user.length])

   useEffect(() => {
      realtimeDB.ref('users')
         .on("child_changed", snapshot => {
            for (let i = 0; i < list.length; i++) {
               if (list[i].user === snapshot.val().user) {
                  list[i].status = snapshot.val().status
               }
            }
            if (list.length > 0) {
               setUsers(list.map((doc) => ({
                  data: doc
               })))
            }
         })
   }, [users])

   const scroll = (recieved) => {
      document.getElementById(recieved).style.display = 'block'
      const chat_box = document.getElementById("chat_form_" + recieved)
      if (chat_box != null) chat_box.scrollTop = chat_box.scrollHeight;
   }


   return (
      <div className="message_box">
         {users.map(object => (
            <ChatBox
               recieved={object.data.user}
               src={object.data.photoURL}
               fullname={object.data.displayName}
            />
         ))}
         <div className="message">
            {users.map(object => (
               (object.data.user !== user.email) ? (
                  <div className="user_icon">
                     <Avatar
                        src={object.data.photoURL}
                        onClick={e => (scroll(object.data.user))}
                     />
                     <div className="status_icon">
                        {(object.data.status === true) ? (
                           <FiberManualRecordIcon />
                        ) : (null)}
                     </div>
                  </div>
               ) : (null)
            ))}
         </div>
      </div>
   )
}

export default Messenger
