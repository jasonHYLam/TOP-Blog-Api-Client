import { useState, useEffect } from 'react'
import { Post } from './Post';

export function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/home')
    .then((res) => res.json())
    .then((data) => setPosts(data.allPosts)
    )
    
  }, [])

    return (
        <>
            <p>Yo ho, land spotted.</p>
            {posts.map((post) => {
            // console.log(post)
            return <Post key={post._id} post={post} />
            })}
        </>
    )
}