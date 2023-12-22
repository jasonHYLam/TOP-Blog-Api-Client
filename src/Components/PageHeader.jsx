// import { useContext } from "react"
// import  { AuthContext } from 
import { Link } from "react-router-dom"
// i will need to replace a tag with Link Component
export function PageHeader() {

    // const { loggedInUser } = useContext(AuthContext)
    return (
        <>
            <header>
                <Link to={"posts"}>Home</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/sign-up"}>Sign up</Link>
                <Link to={"/logout"}>Log out</Link>
            </header>
        </>
    )

}