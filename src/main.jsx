import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HomePage } from './Components/HomePage.jsx'
import { PageLayout } from './Components/PageLayout.jsx'
import { ErrorPage } from './Components/ErrorPage.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    // element: <App/>
    // element: <HomePage/>,
    element: <PageLayout/>,
    children: [
      {
        path: 'home',
        element: <HomePage/>,
      },
      {
        path: 'posts/:postId',
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
