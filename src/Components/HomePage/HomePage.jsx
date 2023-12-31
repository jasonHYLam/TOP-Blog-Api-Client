import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { PostPreview } from '../PostPreview/PostPreview';

// could include number of comments and likes.

export function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/home')
    .then((res) => res.json())
    .then((data) => setPosts(data.allPosts))
    .then()
  }, [])

    return (
        <>
            <p>Yo ho, land spotted.</p>
            {/* show only the published blogPosts */}
            {posts.map((post) => {
              return (
                <Link key={post._id} to={`/posts/${post._id}`}>
                  <PostPreview post={post}/>
                </Link>
              )  
          })}
            
        </>
    )
}