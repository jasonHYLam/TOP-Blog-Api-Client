import styles from "./PostPreview.module.css";
import { Link } from "react-router-dom";

export function PostPreview({ post }) {
  return (
    <>
      <Link className={styles.postContainer} to={`/posts/${post._id}`}>
        <div className={styles.postPreviewHeader}></div>
        <div>
          <h2>{post.title}</h2>
          <p className={styles.subText}>by {post.author.username}</p>
          <p className={styles.subText}>{post.dateFormatted}</p>
        </div>
      </Link>
    </>
  );
}
