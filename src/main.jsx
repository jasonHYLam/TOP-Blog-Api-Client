import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './Components/HomePage/HomePage.jsx'
import { PageLayout } from './Components/PageLayout/PageLayout.jsx'
import { PostPage } from './Components/PostPage/PostPage.jsx'
import { ErrorPage } from './Components/ErrorPage/ErrorPage.jsx'
import { LoginPage } from './Components/LoginPage/LoginPage.jsx'
import { Logout } from './Components/Logout/Logout.jsx'
import { SignupPage, } from './Components/SignupPage/SignupPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

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
        path: 'posts/:postid',
        element: <PostPage/>,
      },

      {
        path: 'sign-up',
        element: <SignupPage/>,
      },
      {
        path: 'login',
        element: <LoginPage/>,
      },
      {
        path: 'logout',
        element: <Logout/>,
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
