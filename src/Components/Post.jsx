export function Post({ post }) {
    return <>
            <article>
                <p>How about a meal?</p>
                <h1>{ post.title }</h1>
                <p>{ post.text }</p>
            </article>
    </>
}

