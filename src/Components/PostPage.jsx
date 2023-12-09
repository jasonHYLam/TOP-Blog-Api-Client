import { useLoaderData } from "react-router-dom"

export function PostPage() {
    // should i use useState and useEffect? well i certainly need to fetch the data.
    // should i use the loader function...?
    const postData = useLoaderData();
    console.log(postData)
    return (

        <>
            <p>Hope this works</p>

        
        </>
    )

}