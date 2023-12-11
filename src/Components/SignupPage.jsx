import { Form, redirect } from "react-router-dom";
import { useForm } from "react-hook-form";

export async function action({params, request}) {
    let formData = await request.formData();
    formData = Object.fromEntries(formData)
    console.log(JSON.stringify(formData))

    fetch(`http://localhost:3000/signup`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(formData)
    })
    .catch(err => console.err(err))

    return redirect('/posts')
}

export function SignupPage() {

    const { register, formState: {errors}, handleSubmit, getValues } = useForm();

    console.log(errors)

    return (
        <>
            <main>
                <h1>Sign up!</h1>
                <Form method="POST" action="/sign-up" onSubmit={handleSubmit(data => console.log(data))}>
                    <label htmlFor="username">Username (min. 4 chars)</label>
                    <input 
                        {...register('username', {
                            required: 'Username is required',
                            minLength: {
                                value: 4,
                                message: 'Min. length is 4 characters'
                            }
                        })}
                        type="text" 
                        // required 
                        // minLength={4}
                    />
                    <p>{errors.username?.message}</p>


                    <label htmlFor="password">Password (min. 5 chars)</label>
                    <input 
                        {...register('password', {
                            required:'Password is required',
                            minLength: {
                                value: 5,
                                message: 'Min. length is 5 characters'
                            }
                        })}
                        // name="password" 
                        type="password" 
                        // required 
                        // minLength={5} 
                    />
                    <p>{errors.password?.message}</p>

                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input 
                        {...register('confirmPassword', {
                            required: 'Please confirm password',
                            // minLength: 5
                            minLength: {
                                value: 5,
                                message: 'Min. length is 5 characters'
                            },
                            validate: (val) => {
                                if (getValues('password') !== val) return "Passwords don't match"}
                        })}
                        // name="confirmPassword" 
                        type="password" 
                        // required 
                        // minLength={5} 
                    />
                    <p>{errors.confirmPassword?.message}</p>

                    <button type="submit"> Create account</button>
                </Form>
            </main>
        </>
    )
}