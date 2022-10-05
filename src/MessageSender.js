import { Avatar } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import "./MessageSender.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';
import { useStateValue } from './StateProvider';
import axios from 'axios';
import FormData from 'form-data'

function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [image, setImage] = useState('');
    const [{ user }, dispatch ] = useStateValue('');

    console.log(user)


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const handleSubmit = e => {
        e.preventDefault();

        if (image) {
            const imgForm = new FormData()
            imgForm.append('file', image, image.name)

            axios.post("/file-upload", imgForm, {
                headers: {
                    'accept': "application/json",
                    'Accept-Language' : "en-US, en;q=0.8",
                    'Content-Type': `multipart/form-data; boundary=${imgForm._boundary}`,
                }
            }).then((res) => {
                console.log(res.data)

                const postData = {
                    text: input,
                    imgName: res.data.filename,
                    user: user.displayName,
                    avatar: useEffect.photoURL,
                    timestamp: Date.now()
                }
                console.log(postData);
                savePost(postData)
            })
        } else {
            const postData = {
                text: input,
                user: user.displayName,
                avatar: useEffect.photoURL,
                timestamp: Date.now()
            }
            console.log(postData);
            savePost(postData)
        }

        //database

        setImageUrl("")
        setInput("");
        setImageUrl("");
    }

    const savePost = async (postData) => {
        await axios.post("/file-upload", postData)
        .then((resp) => {
            console.log(resp)
        })
    }

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src={user.photoURL}/>
                <form>
                    <input text="text" value={input} onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input" placeholder={`What's on your mind ${user.displayName}?`} />
                    <input type="file" value={imageUrl} onChange={handleChange}
                    className="messageSender__fileSelector" placeholder='image URL (Optional)'/>
                    <button onClick={handleSubmit} type="submit"> Hidden submit </button>
                </form>
            </div>

            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{ color: "red" }} />
                    <h3> Live Video </h3>
                </div>
                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3> Photo/Video </h3>
                </div>
                <div className='messageSender__option'>
                    <MoodIcon style={{ color: "orange" }} />
                    <h3> Feeling/Activity </h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
