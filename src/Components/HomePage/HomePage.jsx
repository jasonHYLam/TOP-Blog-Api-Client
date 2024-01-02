import { useState, useEffect } from 'react'
import { PostPreview } from '../PostPreview/PostPreview';
import styles from './HomePage.module.css'

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
            <section className={styles.postsGroup}>

              {posts.map((post) => {
                if (post.published_status) {

                  return (
                    <PostPreview key={post._id} post={post}/>
                  )  

                }
            })}

            </section>
            
        </>
    )
}