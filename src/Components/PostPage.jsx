import { useLoaderData } from "react-router-dom"

export function PostPage() {
    // should i use useState and useEffect? well i certainly need to fetch the data.
    // should i use the loader function...?
    const {post, comments} = useLoaderData();
    console.log(comments)
    return (

        <>
            <p>Hope this works</p>

            <h1>{post.title}</h1>
            <p>{post.text}</p>

            <hr />
            <p>Comments</p>
            {comments.map(comment => {
                return (
                    <>
                        <div key={comment._id}>
                            <p>{comment.author}</p>
                            <p>{comment.text}</p>
                            <p>{comment.timeStamp}</p>
                        </div>
                        <hr />
                    </>
                )
            })}

        
        </>
    )

}