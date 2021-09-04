import React from 'react'
import './Widgets.css'

function Widgets() {
   return (
      <div className="widgets">
         <iframe
            title="Widget"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFPTUHCMConfessions&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=792479784690432"
            width="340"
            height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
         ></iframe>
      </div>
   )
}

export default Widgets
