import { Link } from "react-router-dom"
import styles from './PageHeader.module.css';

// isUserLoggedIn is a state variable from PageLayout, which determines if the user is logged in and conditionally renders the corresponding links.
export function PageHeader({isUserLoggedIn, user}) {

    return (
        <>
            <header className={styles.header}>
                <div className={styles.linksGroup}>
                    {isUserLoggedIn ? 
                    <>
                        {user.username ?  <p>Welcome, {user.username}</p> : null}
                        <Link to={"posts"}>Home</Link>
                        <Link to={"/logout"}>Log out</Link>
                    </>
                    : 
                    <>
                        <Link to={"posts"}>Home</Link>
                        <Link to={"/sign-up"}>Sign up</Link>
                        <Link to={"/login"}>Login</Link>
                    </>
                    }

                </div>
            </header>
        </>
    )

}