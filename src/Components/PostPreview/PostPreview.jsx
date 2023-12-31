export function PostPreview({post}) {
    console.log('checking out post author')
    console.log(post.author)

    // maybe show the number of comments
    // maybe show number of likes
    return (
        <>
            <p>{post.title}</p>
            <p>{post.date}</p>
            <p>{post.author.username}</p>
        </>
    )
}