import { Form, useNavigate, useOutletContext } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState } from "react";

// using react-hook-form for FE form validation?
// how would i do the validation and handle incorrect user credentials, and show them?
// cus that's a backend operation
export function LoginPage() {

    const [isUserLoggedIn, setIsUserLoggedIn] = useOutletContext();
    console.log('checking out isUserLoggedIn')
    console.log(isUserLoggedIn)

    const { register, formState: {errors}, handleSubmit, getValues } = useForm();
    const [backendErrors, setBackendErrors] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            console.log('Attempting log in')
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Credentials': true
                },
                body: JSON.stringify(data),
                credentials: 'include',
            })
            .then(res => res.json())
            .then(res => {
                if (res.success === false ) setBackendErrors(res.message)

                else {
                    console.log('fetched as per your bidding, now redirecting...')
                    console.log(res)
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