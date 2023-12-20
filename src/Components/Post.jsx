export function Post({ post }) {
    return <>
            <article>
                <h1>{ post.title }</h1>
                <p>{ post.text }</p>
            </article>
    </>
}

