import { useRouteError } from "react-router-dom"

export function ErrorPage() {

    const error = useRouteError();
    console.error(error);


    return (
        <>
            <h1>Uh oh</h1>
            <p>Sorry, an unexpected error has occurred.</p>

            <i>{error.statusText}</i>
            <i>{error.message}</i>
        
        </>
    )
}