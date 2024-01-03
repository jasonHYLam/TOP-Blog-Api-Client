import { Outlet } from "react-router-dom"
import { PageHeader } from "../PageHeader/PageHeader";
import { useState, useEffect } from "react"
import styles from './PageLayout.module.css';

export function PageLayout() {

    const [ isContentLoaded, setIsContentLoaded ] = useState(false);
    const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false)
    const [user, setUser] = useState()
    // need to pass isUserLoggedIn state variable to pageHeader
    // need to pass setIsUserLoggedIn to Login and Logout via OutletContext

    useEffect(() => {

        async function getUser() {
        // try to obtain user from response object
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/get_user`, {
            credentials: 'include',
        })
        const { user } = await response.json()

        // if they exist, setIsUserLoggedIn to true.
        if (user) {
            setIsUserLoggedIn(true)
            setUser(user)
        }
        setIsContentLoaded(true)

        }
        getUser()
    }, [isUserLoggedIn])

    return (
        <>
        
            { !isContentLoaded ? <p>Loading</p> : 
            <>
                <PageHeader isUserLoggedIn={isUserLoggedIn} user={user}/>

                <main className={styles.outletWrapper} >
                    <Outlet context={[setIsUserLoggedIn]}/>
                </main>
            </>
            }
        </>
    )
    
}