import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleObjectPropertyChange } from "../utils.js";
import { resetPassword, resetPasswordConfirm } from "../features/auth/authSlice.js";
import Spinner from "../components/Spinner.jsx";

export default function ResetPasswordConfirmPage() {

    const { uid, token } = useParams();
    const [formData, setFormData] = useState({
        "new_password": "",
        "re_new_password": "",
    });

    const { new_password, re_new_password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    function handleResetPasswordConfirmInputChange(e) {
        handleObjectPropertyChange(e, setFormData);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            uid,
            token,
            new_password,
            re_new_password,
        };

        dispatch(resetPasswordConfirm(userData));
    }

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (isSuccess) {
            navigate("/");
            console.log("Your password has been changed.");
        }
    }, [isSuccess, isError, message]);

    return (
        <div className="w-screen h-[93vh] flex justify-center items-center bg-blue-500">
            <div className="bg-white p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-blue-500 text-center mb-3">
                    Set new password
                </h2>
                <form className="flex flex-col">
                    <div>
                        <label htmlFor="new_password">New Password: </label>
                        <input
                            type="password"
                            name="new_password"
                            id="new_password"
                            className="bg-blue-100 rounded mb-4"
                            onChange={handleResetPasswordConfirmInputChange}
                            value={new_password}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="re_new_password">Repeat New Password: </label>
                        <input
                            type="password"
                            name="re_new_password"
                            id="re_new_password"
                            className="bg-blue-100 rounded mb-4"
                            onChange={handleResetPasswordConfirmInputChange}
                            value={re_new_password}
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
                                Reset Password
                            </button>
                        </div>}

                </form>
            </div>
        </div>
    );
}