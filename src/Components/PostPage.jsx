import { useForm } from "react-hook-form";
import { useLoaderData, Form, useParams, useNavigate } from "react-router-dom"
import { Post } from "./Post";
import { Comment } from "./Comment";
import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import { CommentForm } from "./CommentForm";

export function PostPage() {
    
    // useParams used for getting params in React-Router
    const { postid } = useParams();
    const navigate = useNavigate();
    const [ isChangeSubmitted, setIsChangeSubmitted ] = useState();
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ post, setPost ] = useState();
    const [ comments, setComments ] = useState();
    const [ user, setUser ] = useState();

    useEffect(() => {
        async function fetchData() {

          const response = await fetch(
            `http://localhost:3000/home/${postid}`,
            {
              credentials: "include",
              headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true
                },
            })
            const {post, comments, user} = await response.json();

            setPost(post);
            setComments(comments);
            setUser(user);
            setIsLoaded(true);
            setIsChangeSubmitted(false)
        }
        fetchData()
    },
    [isLoaded, postid, isChangeSubmitted]
    )


    return (
        !isLoaded ? <p>Loading</p> : 
        <>
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
            {!user ? <p>Please login to leave a comment.</p> :
            <>
            <CommentForm setIsChangedSubmitted={setIsChangeSubmitted} />
            </> 
            }

            <p>Comments</p>

            {comments.map(comment => {
                return (
                    <Comment key={comment._id} comment={comment}/>
                )
            })}


        </>
    )
}