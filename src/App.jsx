import { useState, useEffect } from 'react'
import { Post } from './Components/Post'
// import { v4 as uuidv4 } from 'uuid';

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/home')
    .then((res) => res.json())
    .then((data) => setPosts(data.allPosts)
    )
    
  }, [])

  // useEffect(() => {
  //   fetch('http://localhost:3000/create_new_post')
  //   .then((res) => res.json())
  //   .then((data) => setMessage(data.message))
  // }, [])

  console.log(message);

  return (
    <>
      <h1>Ho there</h1>

      <div className='App'>
        <h1>message: {message}</h1>


        {console.log(posts)}
        {posts.map((post) => {
          // console.log(post)
          return <Post key={post._id} post={post} />
        })}



      </div>
    </>
  )
}

export default App
