import { useParams } from "react-router-dom";
import { Post } from "../Post/Post";
import { Comment } from "../Comment/Comment";
import { useEffect, useState } from "react";
import { CommentForm } from "../CommentForm/CommentForm";
import styles from "./PostPage.module.css";

export function PostPage() {
  const { postid } = useParams();
  const [isChangeSubmitted, setIsChangeSubmitted] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  const [post, setPost] = useState();
  const [comments, setComments] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/home/${postid}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        }
      );
      const { post, comments, user } = await response.json();

      setPost(post);
      setComments(comments);
      setUser(user);
      setIsLoaded(true);
      setIsChangeSubmitted(false);
    }
    fetchData();
  }, [isLoaded, postid, isChangeSubmitted]);

  return !isLoaded ? (
    <p>Loading</p>
  ) : (
    <>
      <div className={styles.postPageWrapper}>
        <Post post={post} />

        <hr />

        {!user ? (
          <p>Please login to leave a comment.</p>
        ) : (
          <>
            <CommentForm setIsChangedSubmitted={setIsChangeSubmitted} />
          </>
        )}

        <p>Comments</p>
        {comments.length === 0 ? (
          <p> No comments -__- </p>
        ) : (
          <>
            {comments.map((comment) => {
              return <Comment key={comment._id} comment={comment} />;
            })}
          </>
        )}
      </div>
    </>
  );
}
