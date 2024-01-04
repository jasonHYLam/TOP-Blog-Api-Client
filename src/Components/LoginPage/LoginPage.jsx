import { Form, useNavigate, useOutletContext } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState } from "react";

// using react-hook-form for FE form validation.
// user input validation is also performed on the backend, and such errors are displayed as required.
export function LoginPage() {

    const [setIsUserLoggedIn] = useOutletContext();

    const { register, formState: {errors}, handleSubmit } = useForm();
    const [backendErrors, setBackendErrors] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true
                },
                body: JSON.stringify(data),
                credentials: 'include',
            })
            .then(res => {

                console.log('checking out res...')
                console.log(res)
                res.json()

            }
                )
            .then(res => {
                console.log('checking fruits of login operation')
                console.log(res)
                if (res.success === false ) setBackendErrors(res.message)

                else {
                    // set state such that the header knows that the user has logged in.
                    setIsUserLoggedIn(true)
                    navigate('/posts');
                }
            })

            
        }
        catch(err) {
            console.log('is there an error perhaps')
            console.log(err)
        }
    }

    return (
        <>
            <main>
                <h1>Log in</h1>
                <Form method="POST" action="/login" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        {...register('username', {
                            required: 'Username is required',
                        })
                        }
                    />
                    <p>{errors.username?.message}</p>
                   

                    <label htmlFor="password">Password</label>
                    <input 
                        type="text" 
                        {...register('password', {
                            required: 'Password is required',
                        })
                        }
                    />
                    <p>{errors.password?.message}</p>
                    {backendErrors !== "" ? <p>{backendErrors}</p> : null}

                    <button type="submit"> Login</button>
                </Form>
            </main>
        </>
    )
}