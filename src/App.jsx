import { useState, useEffect } from 'react'
import { Post } from './Components/Post'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/home')
    .then((res) => res.json())
    .then((data) => 
      setMessage(data)
      // setMessage(data.message)
      // setPosts(data.allPosts)
    )
    
  }, [])

  // useEffect(() => {
  //   fetch('http://localhost:3000/create_new_post')
  //   .then((res) => res.json())
  //   .then((data) => setMessage(data.message))
  // }, [])

  console.log(message);
  // console.log(posts);

  return (
    <>
      <h1>Ho there</h1>
      <Post/>

      <div className='App'>
        {/* <h1>message: {message}</h1> */}


        {posts.map(post => {
          <li>post: {post}</li>
        })}



      </div>
    </>
  )
}

export default App
