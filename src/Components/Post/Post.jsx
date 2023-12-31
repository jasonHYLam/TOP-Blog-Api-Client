import parse from 'html-react-parser';
import styles from './Post.module.css';

export function Post({ post }) {
    return <>
            <article>
                <section>
                    <h1>{ post.title }</h1>
                    <p>by {post.author.username}</p>
                    <p>created on {post.date}</p>
                </section>
                <hr />
                <section className={styles.blogPostContent}>
                    {parse(post.content)}
                </section>
            </article>
    </>
}

