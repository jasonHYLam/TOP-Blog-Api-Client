import { useLoaderData } from "react-router-dom"
import { Post } from "./Post";
import { Comment } from "./Comment";

export function PostPage() {
    // should i use useState and useEffect? well i certainly need to fetch the data.
    // should i use the loader function...?

    // however i do need to verify...
    const {post, comments} = useLoaderData();

    console.log(post)
    console.log(comments)

    // need to handle if data isn't able to be fetched
    // is the passportJWT the reason why data wasn't fetched?

    return (
        <>
            {/* <Post post={post}/> */}
            <hr />
            <p>Comments</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>New Comment</button>

            <p>FOR NOW CHILL. NO DATA</p>
            {/* {comments.map(comment => {
                return (
                    <Comment key={comment._id} comment={comment}/>
                )
            })} */}

        </>
    )
}