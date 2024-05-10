import { Outlet } from "react-router-dom";
import { PageHeader } from "../PageHeader/PageHeader";
import { useState, useEffect } from "react";
import styles from "./PageLayout.module.css";
import { Loading } from "../Loading/Loading";

export function PageLayout() {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/get_user`,
        {
          credentials: "include",
        }
      );
      const { user } = await response.json();

      if (user) {
        setIsUserLoggedIn(true);
        setUser(user);
      }
      setIsContentLoaded(true);
    }
    getUser();
  }, [isUserLoggedIn]);

  return (
    <>
      {!isContentLoaded ? (
        <Loading />
      ) : (
        <>
          <PageHeader isUserLoggedIn={isUserLoggedIn} user={user} />
          <main className={styles.outletWrapper}>
            <Outlet context={[setIsUserLoggedIn]} />
          </main>
        </>
      )}
    </>
  );
}
