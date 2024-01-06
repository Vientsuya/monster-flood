import { useEffect, useState } from "react";
import { handleObjectPropertyChange } from "../utils.js";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: "",
    });

    const { first_name, last_name, email, password, re_password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth,
    );

    function handleRegisterInputChange(e) {
        handleObjectPropertyChange(e, setFormData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== re_password) {
            console.log("Passwords do not match");
        } else {
            const userData = {
                first_name,
                last_name,
                email,
                password,
                re_password,
            };
            dispatch(register(userData));
        }
    };

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (user) {
            navigate("/");
        }

        if (isSuccess) {
            dispatch(reset());
            navigate("/");
            console.log("Activation email has been sent.");
        }
    }, [isSuccess, isError, message, user]);

    return (
        <div className="w-screen h-[93vh] flex justify-center items-center bg-blue-500">
            <div className="bg-white p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-blue-500 text-center mb-3">
                    Register
                </h2>
                <form className="flex flex-col">
                    <div>
                        <label htmlFor="first-name">First Name: </label>
                        <input
                            type="text"
                            name="first_name"
                            id="first-name"
                            className="bg-blue-100 rounded mb-4"
                            onChange={handleRegisterInputChange}
                            value={first_name}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="last-name">Last Name: </label>
                        <input
                            type="text"
                            name="last_name"
                            id="last-name"
                            className="bg-blue-100 rounded mb-4"
                            onChange={handleRegisterInputChange}
                            value={last_name}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-blue-100 rounded mb-4"
                            onChange={handleRegisterInputChange}
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
                            onChange={handleRegisterInputChange}
                            value={password}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="re-password">Retype Password: </label>
                        <input
                            type="password"
                            name="re_password"
                            id="re-password"
                            className="bg-blue-100 rounded mb-4"
                            onChange={handleRegisterInputChange}
                            value={re_password}
                            required
                        />
                    </div>

                    <div className="text-center">
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <button
                                type="submit"
                                className="bg-blue-400 text-white px-4 py-2"
                                onClick={handleSubmit}
                            >
                                Register
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
