import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

function Header() {
   return (
      <div className="header">
         <div className="header_left">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1024px-Facebook_f_logo_%282021%29.svg.png" alt="" />
            <div className="header_input">
               <SearchIcon />
               <input type="text" placeholder="Search Facebook"/>
            </div>
         </div>
         <div className="header_center">
            <div className="header_option header_option--active">
               <HomeIcon fontSize="large" />
            </div>
            <div className="header_option">
               <FlagIcon fontSize="large" />
            </div>
            <div className="header_option">
               <SubscriptionsOutlinedIcon fontSize="large" />
            </div>
            <div className="header_option">
               <StorefrontOutlinedIcon fontSize="large" />
            </div>
            <div className="header_option">
               <SupervisedUserCircleIcon fontSize="large" />
            </div>
         </div>
         <div className="header_right">
            <div className="header_info">
               <Avatar src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/150552669_1348643195499808_528222375090222078_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wUY96tDRedwAX8atqMV&_nc_ht=scontent.fdad3-3.fna&oh=d035d1d13ee695d3940010ce754e17be&oe=6153B5A0"/>
               <h4>Nguyễn Minh Trí</h4>
            </div>
         </div>
         <IconButton>
            <AddIcon />
         </IconButton>
         <IconButton>
            <ForumIcon />
         </IconButton>
         <IconButton>
            <NotificationsActiveIcon />
         </IconButton>
         <IconButton>
            <ExpandMoreIcon />
         </IconButton>
      </div>
   )
}

export default Header
