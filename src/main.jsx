import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './Components/HomePage.jsx'
import { PageLayout } from './Components/PageLayout.jsx'
import { PostPage } from './Components/PostPage.jsx'
import { ErrorPage } from './Components/ErrorPage.jsx'
import { LoginPage } from './Components/LoginPage.jsx'
// import { SignupPage, action as signupAction } from './Components/SignupPage.jsx'
import { SignupPage, } from './Components/SignupPage.jsx'
// import './index.css'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout/>,
    children: [
      {
        path: 'posts',
        element: <HomePage/>,
      },
      {
        path: 'posts/:postId',
        element: <PostPage/>,

        loader: 
        
        async (params) => {

          await Promise.all([
            // async ({params}) => {
              await fetch(
                `http://localhost:3000/home/${params.postId}`,
                {
                  credentials: "include",
                  headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Credentials': true
                    },
                })
                // .then(res => res.json())
                ,
            // },

            await fetch('http://localhost:3000/home/authenticate')
            // .then(res => res.json())
          ])
          .then(res => res.json())

        }
      },

      {
        path: 'sign-up',
        element: <SignupPage/>,
        // action: signupAction,
      },
      {
        path: 'login',
        element: <LoginPage/>,
      }
    ],
    errorElement: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
