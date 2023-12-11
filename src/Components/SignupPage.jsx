import { Form, redirect } from "react-router-dom"

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
    return (
        <>
            <main>
                <h1>Sign up!</h1>
                <Form method="POST" action="/sign-up">
                    <label htmlFor="username">Username (min. 4 chars)</label>
                    <input name="username" type="text" required minLength={4}  />

                    <label htmlFor="password">Password (min. 5 chars)</label>
                    <input name="password" type="password" required minLength={5} />

                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input name="confirmPassword" type="password" required minLength={5} />

                    <button type="submit"> Create account</button>
                </Form>
            </main>
        </>
    )
}