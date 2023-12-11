import { useState, useEffect } from 'react'
import { Post } from './Post';
import { Link } from 'react-router-dom';

export function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/home')
    .then((res) => res.json())
    .then((data) => setPosts(data.allPosts))
  }, [])

    return (
        <>
            <p>Yo ho, land spotted.</p>
            {posts.map((post) => {
            // console.log(post)
            return (
              <Link key={post._id} to={`/posts/${post._id}`}>
                <Post  post={post} />
              </Link>
            )  
          })}
            
        </>
    )
}