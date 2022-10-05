import React from 'react';
import "./Post.css";
import { Avatar } from "@mui/material"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubble';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMore';
import axios from "axios";




function Post({ profilePic, imgName, username, timestamp, message }) {




    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic}
                    className="post__avatar" />
                <div className='post__topInfo'>
                    <h3> {username} </h3>
                    <p> Timestamp.... </p>
                    <p> {new Date(parseInt(timestamp)).toUTCString()} </p>
                </div>
            </div>

            <div className='post__bottom'>
                <p>{message}</p>
            </div>

            {
                imgName ? (
                    <div className='post__image'>
                        <img src={imgName} alt="" />
                {/* <img src={`http://localhost:5000//api/v1/post/?name=${imgName}`} alt="" /> */}
                    </div>
                ) : (
                    console.log('DEBUG >>> No image here')
                )
            }

            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpIcon />
                    <p> Like </p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineIcon />
                    <p> Comment </p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p> Share </p>
                </div>
                <div className='post__option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post



// function App(){
//     const [profileData, setProfileData] = useState(null)

//     function getData() {
//         axios({
//             method: "GET",
//             url: "/"
//         })
//         .then((response) => {
//             const res = response.data
//             setProfileData(({
//                 profile_name: res.name,
//                 about_me: res.about
//             }))
//         }).catch((error) => {
//             if (error.response){
//                 console.log(error.response)
//                 console.log(error.response.status)
//                 console.log(error.response.headers)
//             }
//         })
//     }
// }
