import { Form, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState } from "react";

export async function action({params, request}) {
    let formData = await request.formData();
    formData = Object.fromEntries(formData)
    console.log(JSON.stringify(formData))

    // fetch for non react-hook-form set up

    // fetch(`http://localhost:3000/signup`, {
    // method: "POST",
    // headers: {"Content-Type": "application/json"},
    // body: JSON.stringify(formData)
    // })
    // .catch(err => console.err(err))

    // return redirect('/posts')
}

// using react-hook-form for FE form validation?
// how would i do the validation and handle incorrect user credentials, and show them?
// cus that's a backend operation
export function LoginPage() {

    const { register, formState: {errors}, handleSubmit, getValues } = useForm();
    const [backendErrors, setBackendErrors] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            console.log('good day sunshine')
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                console.log(res.success)
                if (res.success === false ) setBackendErrors(res.message)

                else {
                    console.log('fetched as per your bidding, now redirecting...')
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