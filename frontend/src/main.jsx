import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from './app/store'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import './index.css'

import Homepage from "./pages/Homepage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ActivatePage from "./pages/ActivatePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/reset-password",
        element: <ResetPasswordPage/>
    },
    {
        path: "activate-account",
        element: <ActivatePage/>
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
