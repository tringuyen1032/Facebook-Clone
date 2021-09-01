import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSend from './MessageSend'
import Post from './Post'

function Feed() {
   return (
      <div className="feed">
      <StoryReel />
      <MessageSend />
      <Post 
         profilePic='https://scontent.xx.fbcdn.net/v/t1.6435-1/p100x100/120706406_691578961460418_6923178654692172363_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=hIt31N-zNpcAX9U-W_R&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=d1adba8280a54db7f1af3a74a59868fc&oe=615488C3'
         message='Chúc bạn tui mọi việc thuận lợi, đạt được bất kì thứ mình muốn, MAU GIÀU. Happy Birthday To Best Friend 🎈🎂🎊🎉'
         timestamp='This is a timestamp'
         username='Trần Đại Đăng'
         image='https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/p180x540/172434353_939935660162157_6999700424253172504_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=R0DoQuvupUwAX9el-Rt&_nc_ht=scontent.fsgn2-6.fna&oh=5e910b962a410cb4006a2265bb468aaf&oe=6155EEA7'
      />
      </div>
   )
}

export default Feed
