import { useLoaderData } from "react-router-dom"
import { Post } from "./Post";
import { Comment } from "./Comment";

export function PostPage() {
    // should i use useState and useEffect? well i certainly need to fetch the data.
    // should i use the loader function...?
    const {post, comments} = useLoaderData();

    return (
        <>
            <Post post={post}/>
            <hr />
            <p>Comments</p>

            {comments.map(comment => {
                return (
                    <Comment key={comment._id} comment={comment}/>
                )
            })}

        </>
    )
}