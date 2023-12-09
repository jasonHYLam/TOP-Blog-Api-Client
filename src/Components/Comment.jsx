export function Comment({comment}) {
    return (
        <article>
            <p>{comment.author}</p>
            <p>{comment.text}</p>
            <p>{comment.timeStamp}</p>
        </article>
    )
}