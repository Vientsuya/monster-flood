import { useEffect, useState } from "react";
import { handleObjectPropertyChange } from "../utils.js";

export default function ResetPasswordPage() {
    const [formData, setFormData] = useState({
        email: "",
    });

    const { email } = formData;

    function handleSubmit(e) {
        e.preventDefault();
        console.log("password was correctly reset");
    }

    function handleResetPasswordInputChange(e) {
        handleObjectPropertyChange(e, setFormData);
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-blue-500">
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

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-400 text-white px-4 py-2"
                            onClick={handleSubmit}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
