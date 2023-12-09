export function Comment({comment}) {
    return (
        <article key={comment._id}>
            <p>{comment.author}</p>
            <p>{comment.text}</p>
            <p>{comment.timeStamp}</p>
        </article>
    )
}