import { useForm } from "react-hook-form";
import { useLoaderData, Form, useParams } from "react-router-dom"
import { Post } from "./Post";
import { Comment } from "./Comment";

export function PostPage() {

    const { register, formState: {errors}, handleSubmit, getValues } = useForm();
    // should i use useState and useEffect? well i certainly need to fetch the data.
    // should i use the loader function...?

    // however i do need to verify...
    const {post, comments, user} = useLoaderData();
    // useParams used for getting params in React-Router
    const { postId } = useParams();


    // console.log('taking a look at comments')
    // console.log(comments)
    const onSubmit = async (data) => {
        console.log('taking a look at params')
        console.log(postId)
        await fetch(`http://localhost:3000/home/${postId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(data),
            credentials: 'include',
        }
        // .then(res => res.json())
        // console.log('done fetching')
        )
        
    }

    // do i need action URL for Form? not sure
    return (
        <>
            <Post post={post}/>
            <hr />
            {user ? 
            <>
            <Form method="POST" action={`/posts/${postId}`} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="comment">Write a comment</label>
                <textarea name="" id="" cols="30" rows="10"
                {...register('comment', {required: 'Write a comment'})}
                />
                <button type="submit">New Comment</button>
            </Form>
            <p>{errors.comment?.message}</p>
            </> 
            : 
            <p>Please login to leave a comment.</p>
            }

            <p>Comments</p>

            {/* <p>FOR NOW CHILL. NO DATA</p> */}
            {comments.map(comment => {
                return (
                    <Comment key={comment._id} comment={comment}/>
                )
            })}


        </>
    )
}