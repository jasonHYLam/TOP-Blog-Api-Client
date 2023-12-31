import { Link } from "react-router-dom"

// isUserLoggedIn is a state variable from PageLayout, which determines if the user is logged in and conditionally renders the corresponding links.
export function PageHeader({isUserLoggedIn, user}) {

    return (
        <>
            <header>
                <Link to={"posts"}>Home</Link>
                {isUserLoggedIn ? 
                <>
                    {user.username ?  <p>Welcome, {user.username}</p> : null}
                    <Link to={"/logout"}>Log out</Link>
                </>
                : 
                <>
                    <Link to={"/sign-up"}>Sign up</Link>
                    <Link to={"/login"}>Login</Link>
                </>
                }
            </header>
        </>
    )

}