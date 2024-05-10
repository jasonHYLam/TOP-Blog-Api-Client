import { Link } from "react-router-dom";
import styles from "./PageHeader.module.css";
import { useEffect, useState } from "react";
import { Loading } from "../Loading/Loading";

export function PageHeader({ isUserLoggedIn, user }) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return !isLoaded ? (
    <Loading />
  ) : (
    <>
      <header className={styles.header}>
        <div className={styles.linksGroup}>
          {isUserLoggedIn ? (
            <>
              {user ? (
                <p className={styles.headerText}>Welcome, {user.username}</p>
              ) : null}
              <Link
                className={`${styles.headerText} ${styles.link}`}
                to={"posts"}
              >
                Home
              </Link>
              <Link
                className={`${styles.headerText} ${styles.link}`}
                to={"/logout"}
              >
                Log out
              </Link>
            </>
          ) : (
            <>
              <Link
                className={`${styles.headerText} ${styles.link}`}
                to={"posts"}
              >
                Home
              </Link>
              <Link
                className={`${styles.headerText} ${styles.link}`}
                to={"/sign-up"}
              >
                Sign up
              </Link>
              <Link
                className={`${styles.headerText} ${styles.link}`}
                to={"/login"}
              >
                Login
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
}
