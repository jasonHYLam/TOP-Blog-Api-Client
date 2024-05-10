import parse from "html-react-parser";
import styles from "./Post.module.css";

export function Post({ post }) {
  return (
    <>
      <article>
        <section>
          <h1>{post.title}</h1>
          <i className={styles.subText}>
            {post.author.username}, {post.dateFormatted}
          </i>
        </section>
        <section className={styles.blogPostContent}>
          {parse(post.content)}
        </section>
      </article>
    </>
  );
}
