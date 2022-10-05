import React from 'react';
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
      <iframe 
      src = "http://beyondiweb.com/tutorials/link-to-iframe/"
      title='Widgets'
      width="350"
      height = "2500"
      style = {{ border: "none", overflow: "hidden" }}
      scrolling = "no"
      frameborder = "0"
      allowTransparency="true"
      allow = "encrypted-media"
      >
      </iframe>
    </div> 
  )
}

export default Widgets
