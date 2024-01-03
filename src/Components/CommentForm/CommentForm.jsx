import { useForm } from "react-hook-form"
import { useParams, Form } from "react-router-dom";
import styles from './CommentForm.module.css';

export function CommentForm({ setIsChangedSubmitted }) {

    const { postid } = useParams();
    // reset is used to reset input on submit.
    const {register, formState: {errors}, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/home/${postid}`, {
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
    }

    return (
        <>
        <Form className={styles.form} method="POST" onSubmit={handleSubmit(onSubmit)}>

            <p htmlFor="comment">Write a comment</p>
            <textarea className={styles.input} name="" id="" cols="30" rows="10"
            {...register('comment', {required: 'Write a comment'})}
            />
            <button className={styles.button} type="submit">New Comment</button>
        </Form>
        <p>{errors.comment?.message}</p>
        
        </>
    )
}