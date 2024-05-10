import styles from "./Comment.module.css";

export function Comment({ comment }) {
  return (
    <article className={styles.comment}>
      <section className="row">
        <span className={styles.author}>{comment.author?.username}</span>
        <span className={styles.subText}>{comment.timeStampFormatted}</span>
      </section>
      <p>{comment.text}</p>
    </article>
  );
}
