import { Form, useNavigate, useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function LoginPage() {
  const [setIsUserLoggedIn] = useOutletContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [backendErrors, setBackendErrors] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (loginInput) => {
    try {
      console.log("seeing if try is executing");
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
          body: JSON.stringify(loginInput),
          credentials: "include",
          mode: "cors",
        }
      );

      const data = await response.json();
      console.log("checking out data");
      console.log(data);
      if (data.success === false) setBackendErrors(data.message);
      else {
        setIsUserLoggedIn(true);
        navigate("/posts");
      }
    } catch (err) {
      console.log("is there an error perhaps");
      console.log(err);
    }
  };

  return (
    <>
      <main>
        <h1>Log in</h1>
        <Form method="POST" action="/login" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <p>{errors.username?.message}</p>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <p>{errors.password?.message}</p>
          {backendErrors !== "" ? <p>{backendErrors}</p> : null}

          <button type="submit"> Login</button>
        </Form>
      </main>
    </>
  );
}
