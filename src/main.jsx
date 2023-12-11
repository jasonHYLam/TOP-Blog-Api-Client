import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './Components/HomePage.jsx'
import { PageLayout } from './Components/PageLayout.jsx'
import { PostPage } from './Components/PostPage.jsx'
import { ErrorPage } from './Components/ErrorPage.jsx'
import { SignupPage, action as signupAction } from './Components/SignupPage.jsx'
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
        // I may need try and catch...
        loader: async ({params}) => {
          return await fetch(`http://localhost:3000/home/${params.postId}`)
        },
      },
      {
        path: 'sign-up',
        element: <SignupPage/>,
        action: signupAction,
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
