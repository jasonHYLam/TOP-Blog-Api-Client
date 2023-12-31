export function Comment({comment}) {
    return (
        <article>
            <hr />
            <p>{comment.author?.username}</p>
            <p>{comment.text}</p>
            <p>{comment.timeStampFormatted}</p>
        </article>
    )
}