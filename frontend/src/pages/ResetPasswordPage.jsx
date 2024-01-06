import { useEffect, useState } from "react";
import { handleObjectPropertyChange } from "../utils.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../features/auth/authSlice.js";
import Spinner from "../components/Spinner.jsx";

export default function ResetPasswordPage() {
    const [formData, setFormData] = useState({
        email: "",
    });

    const { email } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    function handleResetPasswordInputChange(e) {
        handleObjectPropertyChange(e, setFormData);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            email,
        };

        dispatch(resetPassword(userData));
    }

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (isSuccess) {
            navigate("/");
            console.log("Email with password reset has been sent.");
        }
    }, [isSuccess, isError, message]);

    return (
        <div className="w-screen h-[93vh] flex justify-center items-center bg-blue-500">
            <div className="bg-white p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-blue-500 text-center mb-3">
                    Reset Password
                </h2>
                <form className="flex flex-col">
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-blue-100 rounded mb-4"
                            onChange={handleResetPasswordInputChange}
                            value={email}
                            required
                        />
                    </div>
                    {isLoading ? <Spinner /> :
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-blue-400 text-white px-4 py-2"
                                onClick={handleSubmit}
                            >
                                Reset
                            </button>
                        </div>}

                </form>
            </div>
        </div>
    );
}
