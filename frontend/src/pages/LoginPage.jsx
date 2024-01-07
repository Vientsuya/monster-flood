import { handleObjectPropertyChange } from "../utils.js";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import { useDispatch, useSelector } from "react-redux";
import { login, reset, getUserInfo } from "../features/auth/authSlice.js";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth,
    );

    function handleLoginInputChange(e) {
        handleObjectPropertyChange(e, setFormData);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email,
            password,
        };
        dispatch(login(userData));
    }

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (isSuccess || user) {
            navigate("/dashboard");
        }
        dispatch(reset());
        dispatch(getUserInfo());
    }, [isError, isSuccess, message, user]);

    return (
        <div className="w-screen h-[93vh] flex justify-center items-center bg-blue-500">
            <div className="bg-white p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-blue-500 text-center mb-3">
                    Login
                </h2>
                <form className="flex flex-col">
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-blue-100 rounded mb-4"
                            onChange={handleLoginInputChange}
                            value={email}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="bg-blue-100 rounded mb-4"
                            onChange={handleLoginInputChange}
                            value={password}
                            required
                        />
                    </div>

                    <Link to="/reset-password">Forgot Password?</Link>

                    <div className="text-center">
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <button
                                type="submit"
                                className="bg-blue-400 text-white px-4 py-2"
                                onClick={handleSubmit}
                            >
                                Sign in
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
