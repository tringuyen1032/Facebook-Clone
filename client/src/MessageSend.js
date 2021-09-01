import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './MessageSend.css'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

function MessageSend() {
   const [input, setInput] = useState('')
   const [imageUrl, setImageUrl] = useState('')

   const handleSubmit = (e) => {
      e.preventDefault();
      setInput('')
      setImageUrl('')
   }
   return (
      <div className="messageSender">
         <div className="messageSender_top">
            <Avatar src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/150552669_1348643195499808_528222375090222078_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wUY96tDRedwAX8atqMV&_nc_ht=scontent.fdad3-3.fna&oh=d035d1d13ee695d3940010ce754e17be&oe=6153B5A0" />
            <form>
               <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  className="messageSender_input"
                  placeholder="What's on your mind. Nguyễn Minh Trí?"
               />
               <input
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                  placeholder="Image URL (Optional)"
               />
               <button onClick={handleSubmit} type="submit">
                  Hidden submit
               </button>
            </form>
         </div>
         <div className="messageSender_bottom">
            <div className="messageSender_option">
               <VideocamIcon style={{ color: "red" }} />
               <h3>Live Video</h3>
            </div>
            <div className="messageSender_option">
               <PhotoLibraryIcon style={{ color: "green" }} />
               <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option">
               <InsertEmoticonIcon style={{ color: "orange" }} />
               <h3>Feeling/Activity</h3>
            </div>
         </div>
      </div>
   )
}

export default MessageSend
