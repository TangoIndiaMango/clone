import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className='storyReel'>
      {/* Story */}
      <Story image="https://th.bing.com/th/id/OIP.vG-N92ZDd33A3MxipZRnvwHaJK?w=125&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" profileSrc="https://th.bing.com/th/id/OIP.C_kFB5OCn0dKNf0XGWHA1QHaDz?w=296&h=179&c=7&r=0&o=5&dpr=1.25&pid=1.7" title="Sonny" />

      <Story image="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" profileSrc="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" title="Kheir" />

      <Story image= "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" profilePic="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRlY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" title="Bangok" />

      <Story image="https://th.bing.com/th/id/OIP.D4-WzVpB1I_0WnUSDcnGEAHaFm?w=250&h=189&c=7&r=0&o=5&dpr=1.25&pid=1.7" profileSrc="https://th.bing.com/th/id/OIP.vG-N92ZDd33A3MxipZRnvwHaJK?w=125&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" title="Thawi" />

      <Story image="https://th.bing.com/th/id/OIP.vG-N92ZDd33A3MxipZRnvwHaJK?w=125&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" profileSrc="https://th.bing.com/th/id/OIP.k0oVDgpY1_NLsjM9NcgAQAHaE7?w=251&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" title="Aaron" />
    </div> 
  )
}

export default StoryReel
