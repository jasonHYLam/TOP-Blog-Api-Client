import { useEffect } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"

export function Logout() {

    const navigate = useNavigate();
    const [setIsUserLoggedIn] = useOutletContext();

    useEffect(() => {

        async function logout() {
            fetch(`${import.meta.env.VITE_BACKEND_URL}/logout`, {credentials: "include"})
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