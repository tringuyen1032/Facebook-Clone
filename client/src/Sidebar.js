import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow.js'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibrary from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined"

function Sidebar() {
   return (
      <div className="sidebar">
         <SidebarRow src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.6435-1/cp0/p60x60/150552669_1348643195499808_528222375090222078_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wUY96tDRedwAX8atqMV&_nc_ht=scontent.fdad3-3.fna&oh=d035d1d13ee695d3940010ce754e17be&oe=6153B5A0" title={'Nguyen Minh Tri'}/>
         <SidebarRow Icon={LocalHospitalIcon} title="COVID-19"/>
         <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
         <SidebarRow Icon={PeopleIcon} title="Friends"/>
         <SidebarRow Icon={ChatIcon} title="Messenger"/>
         <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
         <SidebarRow Icon={VideoLibrary} title="Videos"/>
         <SidebarRow Icon={ExpandMoreOutlined} title="More"/>
      </div>
   )
}

export default Sidebar
