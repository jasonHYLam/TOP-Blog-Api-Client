import { useLoaderData } from "react-router-dom"
import { Post } from "./Post";

export function PostPage() {
    // should i use useState and useEffect? well i certainly need to fetch the data.
    // should i use the loader function...?
    const {post, comments} = useLoaderData();
    console.log(comments)
    return (

        <>
            <Post post={post}/>
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