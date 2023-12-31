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
                        {user.username ?  <p className={styles.headerText}>Welcome, {user.username}</p> : null}
                        <Link className={styles.headerText} to={"posts"}>Home</Link>
                        <Link className={styles.headerText} to={"/logout"}>Log out</Link>
                    </>
                    : 
                    <>
                        <Link className={styles.headerText} to={"posts"}>Home</Link>
                        <Link className={styles.headerText} to={"/sign-up"}>Sign up</Link>
                        <Link className={styles.headerText} to={"/login"}>Login</Link>
                    </>
                    }

                </div>
            </header>
        </>
    )

}