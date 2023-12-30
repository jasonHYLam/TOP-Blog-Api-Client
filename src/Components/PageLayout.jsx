import { Outlet } from "react-router-dom"
import { PageHeader } from "./PageHeader"
import { useState, useEffect } from "react"
export function PageLayout() {

    const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false)
    // need to pass isUserLoggedIn to pageHeader
    // need to pass setIsUserLoggedIn to outlet as context i think

    useEffect(() => {
        console.log('checking if pagelayout userEffect is called')

        async function getUser() {
        // try to obtain user from response object
        const response = await fetch('http://localhost:3000/get_user', {
            credentials: 'include',
        })
        const { user } = await response.json()

        console.log('checking out user')
        console.log(user)

        // if they exist, setIsUserLoggedIn to true.
        // If undefined, user is an empty object
        if (user) setIsUserLoggedIn(true)
        }
        getUser()
    }, [isUserLoggedIn])
    return (
        <>
            <PageHeader isUserLoggedIn={isUserLoggedIn}/>
            <Outlet context={[setIsUserLoggedIn]}/>
        
        </>
    )
    
}