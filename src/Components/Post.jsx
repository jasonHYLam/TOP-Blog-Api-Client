import { Link } from "react-router-dom"
export function Post({ post }) {
    return <>
        <Link to={`/posts/${post._id}`}>
            <div>
                <p>How about a meal?</p>
                <h1>{ post.title }</h1>
                <p>{ post.text }</p>
            </div>
        </Link>
    </>
}

