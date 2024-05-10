import { Link } from "react-router-dom";
import styles from "./PageHeader.module.css";
import { useEffect, useState } from "react";

export function PageHeader({ isUserLoggedIn, user }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return !isLoaded ? (
    <p>Loading...</p>
  ) : (
    <>
      <header className={styles.header}>
        <div className={styles.linksGroup}>
          {isUserLoggedIn ? (
            <>
              {user ? (
                <p className={styles.headerText}>Welcome, {user.username}</p>
              ) : null}
              <Link className={styles.headerText} to={"posts"}>
                Home
              </Link>
              <Link className={styles.headerText} to={"/logout"}>
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link className={styles.headerText} to={"posts"}>
                Home
              </Link>
              <Link className={styles.headerText} to={"/sign-up"}>
                Sign up
              </Link>
              <Link className={styles.headerText} to={"/login"}>
                Login
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
}
