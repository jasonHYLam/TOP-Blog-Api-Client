import { Outlet } from "react-router-dom"
import { PageHeader } from "./PageHeader"
export function PageLayout() {
    return (
        <>
            <PageHeader/>
            <Outlet/>
        
        </>
    )
    
}