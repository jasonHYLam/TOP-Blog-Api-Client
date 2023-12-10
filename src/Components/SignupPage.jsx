import { Form } from "react-router-dom"
export function SignupPage() {
    return (
        <>
            <main>
                <h1>Sign up!</h1>
                <Form method="POST">
                    <label htmlFor="username">Username (min. 4 chars)</label>
                    <input name="username" type="text" required minLength={4}  />

                    <label htmlFor="password">Password (min. 5 chars)</label>
                    <input name="password" type="password" required minLength={5} />
                    <button type="submit"> Create account</button>
                </Form>
            </main>
        
        </>
    )
}