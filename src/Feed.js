import React, {useState, useEffect} from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel"
import MessageSender from './MessageSender';
import Post from "./Post"
import axios from 'axios';


function Feed() {
  const [profilePic, setprofilePic] = useState('');
  const [postsData, setPostsData] = useState([]);

  const syncFeed = () => {
    axios.get("/api/v1/post/")
    .then((res) => {
      console.log(res.data)
      setPostsData(res.data)
    })
  }
  useEffect(() => {
    syncFeed()
  }, [])


  return (
    <div className='feed'>
      {/* Story Reel */}
        <StoryReel />
  
    {/* MessageSender */}
  
      <MessageSender />
  
      {/* Post */}
      
      <Post 
        profilePic="https://images.unsplash.com/photo-1664575599736-c5197c684128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        username="Kang Chi"
        message="Working 24/7"
        timestamp="2022:10:03"
        imgName="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />

      <Post 
      profilePic="https://images.unsplash.com/photo-1662581871625-7dbd3ac1ca18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      message="New Dehli India What a beautiful place"
      timestamp="2022:10:03"
      imgName="https://images.unsplash.com/photo-1515091943-9d5c0ad475af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      username = "Sadio Mane"
      />

      <Post 
      profilePic="https://media.istockphoto.com/photos/magician-doing-trick-with-doves-picture-id1007193976?b=1&k=20&m=1007193976&s=170667a&w=0&h=lfPnjYHHHeI2g21uoIGxWlAZdZcaCqgzQgWQL4-aDOg="
      message="Magic shows that enlighten us most times"
      timestamp="2022:10:03"
      imgName="https://media.istockphoto.com/photos/magician-doing-trick-with-doves-picture-id1007193976?b=1&k=20&m=1007193976&s=170667a&w=0&h=lfPnjYHHHeI2g21uoIGxWlAZdZcaCqgzQgWQL4-aDOg="
      username= "Kim"
      />

      <Post 
      profilePic="https://media.istockphoto.com/photos/two-young-women-walking-through-the-city-picture-id1371808256?b=1&k=20&m=1371808256&s=170667a&w=0&h=Ux1U1Kfmr_GamJLfodCy8nCvGfSQRceoRRn6i5GC238="
      message="This the Big Ball i saw Outside some days back"
      timestamp="2022:10:03"
      imgName="https://images.unsplash.com/photo-1663865619804-048699bb9363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlnJTIwYmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      username="Keras Manhoor"
      />

      <Post 
      profilePic="https://media.istockphoto.com/photos/young-boy-opening-his-lunch-box-to-get-food-to-eat-picture-id1302954072?b=1&k=20&m=1302954072&s=170667a&w=0&h=XN7WBfdFcxN9bYKyp5i73-DYSR2NESYQa4TsBzipu9Q="
      message="Understand"
      timestamp="2022:08:03"
      imgName="https://images.unsplash.com/photo-1597301841029-a2162f4e6f9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zmxhc2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      username="Bangok Kai"
      />
        

    </div>
    
  )
  
}

export default Feed






// function App(){
//   const [profileData, setProfileData] = useState(null)
// <Post />
// {postsData.map((post) => (
  
//   <Post
//     profilePic={post.profilePic}
//     message={post.message}
//     timestamp={post.timestamp}
//     username={post.username}
//     imgName={post.user}
//   />
//   function getData() {
//       axios({
//           method: "GET",
//           url: "/profile"
//       })
//       .then((response) => {
//           const res = response.data
//           setProfileData(({
//               profile_name: res.name,
//               about_me: res.about
//           }))
//       }).catch((error) => {
//           if (error.response){
//               console.log(error.response)
//               console.log(error.response.status)
//               console.log(error.response.headers)
//           }
//       })
//   }
// }


