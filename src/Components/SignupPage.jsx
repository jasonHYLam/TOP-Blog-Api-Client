import { Form, redirect } from "react-router-dom"
import { useFormik } from "formik";
import * as yup from "yup";



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

const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username < 4) {
        errors.username = 'Must be at least 4 characters';
    }

    if (!values.password) {
        errors.password= 'Required';
    } else if (values.password < 5) {
        errors.password = 'Must be at least 5 characters';
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required';
    } else if (values.confirmPassword < 5) {
        errors.confirmPassword = 'Must be at least 5 characters';
    }

}

export function SignupPage() {

    const formik = useFormik({

        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        validate,

        onSubmit: async (values) => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <>
            <main>
                <h1>Sign up!</h1>
                <Form method="POST" action="/sign-up" onSubmit={formik.handleSubmit}>
                    <label htmlFor="username">Username (min. 4 chars)</label>
                    <input 
                        name="username" 
                        type="text" 
                        // required 
                        // minLength={4}
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />


                    <label htmlFor="password">Password (min. 5 chars)</label>
                    <input 
                        name="password" 
                        type="password" 
                        required 
                        minLength={5} 
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />

                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input 
                        name="confirmPassword" 
                        type="password" 
                        required 
                        minLength={5} 
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />

                    <button type="submit"> Create account</button>
                </Form>
            </main>
        </>
    )
}