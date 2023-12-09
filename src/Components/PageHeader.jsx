import { Link } from "react-router-dom"
// i will need to replace a tag with Link Component
export function PageHeader() {
    return (
        <>
            <header>
                <Link to={"posts"}>Real Home</Link>
                <Link to={"/login"}>Real login</Link>
                <a href="/posts">Home</a>
                <a href="/login">Login</a>
            </header>
        </>
    )

}