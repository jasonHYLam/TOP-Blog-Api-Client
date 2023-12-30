import { useForm } from "react-hook-form";
import { useLoaderData, Form, useParams, useNavigate } from "react-router-dom"
import { Post } from "./Post";
import { Comment } from "./Comment";
import parse from 'html-react-parser';

// i may have to refactor such that state is used rather than route loader. to update page after leaving a comment.
export function PostPage() {

    const { register, formState: {errors}, handleSubmit, getValues } = useForm();
    // should i use useState and useEffect? well i certainly need to fetch the data.
    // should i use the loader function...?

    // however i do need to verify...
    const {post, comments, user} = useLoaderData();
    console.log('checking out comments')
    console.log(comments)
    // useParams used for getting params in React-Router
    const { postId } = useParams();

    const navigate = useNavigate();

    // console.log('taking a look at comments')
    // console.log(comments)
    console.log('checking out post')
    console.log(post)
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
        });
        // navigate(`/posts/${postId}`)

    }

    // do i need action URL for Form? not sure
    return (
        <>
            {/* <Post post={post}/> */}
            <section>
                <h1>{post.title}</h1>
                <p>by {post.author.username}</p>
                <p>created on {post.date}</p>
            </section>
            <hr />
            <section>
                {parse(post.content)}
            </section>

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