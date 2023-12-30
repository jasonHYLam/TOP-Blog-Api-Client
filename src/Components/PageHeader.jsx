// import { useContext } from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// i may need useEffect, to make fetch request to retrieve user...
export function PageHeader({isUserLoggedIn}) {

    console.log('checking if header is loaded')

    // const [isUserLoggedIn, setIsUserLoggedIn ] = useState(false);

    // useEffect(() => {
    //     console.log('checking if header userEffect is called')

    //     async function getUser() {
    //     // try to obtain user from response object
    //     const response = await fetch('http://localhost:3000/get_user', {
    //         credentials: 'include',
    //     })
    //     const user = await response.json()

    //     console.log('checking out user')
    //     console.log(user)

    //     // if they exist, setIsUserLoggedIn to true.
    //     if (user) setIsUserLoggedIn(true)
    //     }
    //     getUser()
    // }, [])

    return (
        <>
            <header>
                {isUserLoggedIn ? <p>yes logged in</p> : <p>no not logged in</p>}
                <Link to={"posts"}>Home</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/sign-up"}>Sign up</Link>
                <Link to={"/logout"}>Log out</Link>
            </header>
        </>
    )

}