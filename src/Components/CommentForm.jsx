import { useForm } from "react-hook-form"
import { useParams, Form } from "react-router-dom";

export function CommentForm({ setIsChangedSubmitted }) {

    const { postid } = useParams();
    const {register, formState: {errors}, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log('taking a look at params')
        console.log(postid)
        await fetch(`http://localhost:3000/home/${postid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(data),
            credentials: 'include',
        });

        reset();
        setIsChangedSubmitted(true);
        // navigate(`/posts/${postId}`)
    }

    return (
        <>
        <Form method="POST" onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="comment">Write a comment</label>
            <textarea name="" id="" cols="30" rows="10"
            {...register('comment', {required: 'Write a comment'})}
            />
            <button type="submit">New Comment</button>
        </Form>
        <p>{errors.comment?.message}</p>
        
        </>
    )
}