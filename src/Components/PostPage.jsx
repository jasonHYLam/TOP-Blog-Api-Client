import { useForm } from "react-hook-form";
import { useLoaderData, Form } from "react-router-dom"
import { Post } from "./Post";
import { Comment } from "./Comment";

export function PostPage() {
    // should i use useState and useEffect? well i certainly need to fetch the data.
    // should i use the loader function...?

    // however i do need to verify...
    const {post, comments, user} = useLoaderData();

    console.log(post)
    console.log(comments)
    console.log('tryna find loggedInUser')
    console.log(user)

    return (
        <>
            {/* <Post post={post}/> */}
            <hr />
            {user ? 
            <>
            <form action="">
                <label htmlFor=""></label>
            </form>
            </> 
            : 
            <p>Please login to leave a comment.</p>
            }

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