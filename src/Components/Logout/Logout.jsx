import { useEffect } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

export function Logout() {

    const navigate = useNavigate();
    const [setIsUserLoggedIn] = useOutletContext();

    useEffect(() => {

        async function logout() {
            fetch('http://localhost:3000/logout', {credentials: "include"})
            setIsUserLoggedIn(false)
        }
        logout()
        navigate('/posts')
    },
    [navigate, setIsUserLoggedIn]
    )

    return (
        <>
        <p>Prepare for logout</p>
        </>
    )
}