import { Form, redirect } from "react-router-dom"

export async function action({params, request}) {
    let formData = await request.formData();
    formData = Object.fromEntries(formData)
    console.log(JSON.stringify(formData))

    // fetch(`http://localhost:3000/signup`, {
    // method: "POST",
    // headers: {"Content-Type": "application/json"},
    // body: JSON.stringify(formData)
    // })
    // .catch(err => console.err(err))

    // return redirect('/posts')
}

// should i reimplement react-hook-form for FE form validation?
// how would i do the validation and handle incorrect user credentials, and show them?
// cus that's a backend operation
export function LoginPage() {
    return (
        <>
            <main>
                <h1>Log in</h1>
                <Form method="POST" action="/login">
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" required minLength={4}  />

                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" required minLength={5} />
                    <button type="submit"> Login</button>
                </Form>
            </main>
        </>
    )
}