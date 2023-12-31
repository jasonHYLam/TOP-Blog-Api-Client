import parse from 'html-react-parser';

export function Post({ post }) {
    return <>
            <article>
                <section>
                    <h1>{ post.title }</h1>
                    <p>by {post.author.username}</p>
                    <p>created on {post.date}</p>
                </section>
                <hr />
                <section>
                    {parse(post.content)}
                </section>
            </article>
    </>
}

