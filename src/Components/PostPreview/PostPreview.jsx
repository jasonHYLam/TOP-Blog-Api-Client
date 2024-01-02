import styles from './PostPreview.module.css';

import { Link } from 'react-router-dom';

export function PostPreview({post}) {
    console.log('checking out post author')
    console.log(post.author)

    // maybe show the number of comments
    // maybe show number of likes
    return (
        <>

            <Link className={styles.postContainer} to={`/posts/${post._id}`}>
                <div className={styles.postPreviewHeader}></div>
                <div>
                    <h2>{post.title}</h2>
                    <p>by {post.author.username}</p>
                    <p>{post.dateFormatted}</p>
                </div>
            </Link>
        </>
    )
}