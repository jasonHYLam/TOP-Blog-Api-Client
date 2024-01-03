import { Form, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function SignupPage() {

    const { register, formState: {errors}, handleSubmit, getValues } = useForm();
    const navigate = useNavigate();

    // current function when submitting form and successful FE form validation
    // fetch POST request made to backend to post user data, and then redirect to homepage via navigate()
    const onSubmit = async (data) => {
        try {
            fetch(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
            })
            navigate('/posts')
        } 
        catch(err) {return err}
    }

    // form makes use of react-hook-form for FE form validation. 
    // allows error messages to be easily displayed.
    return (
        <>
            <main>
                <h1>Sign up!</h1>
                
                <Form method="POST" action="/sign-up" onSubmit={handleSubmit(onSubmit)}>
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
                        type="password" 
                    />
                    <p>{errors.password?.message}</p>

                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input 
                        {...register('confirmPassword', {
                            required: 'Please confirm password',
                            minLength: {
                                value: 5,
                                message: 'Min. length is 5 characters'
                            },
                            validate: (val) => {
                                if (getValues('password') !== val) return "Passwords don't match"}
                        })}
                        type="password" 
                    />
                    <p>{errors.confirmPassword?.message}</p>

                    <button type="submit"> Create account</button>
                </Form>
            </main>
        </>
    )
}