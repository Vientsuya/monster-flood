import {handleObjectPropertyChange} from "../utils.js";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        "email": "",
        "password": "",
    })

    const {email, password} = formData

    function handleLoginInputChange(e) {
        handleObjectPropertyChange(e, setFormData);
    }

    // PLACEHOLDER
    function handleSubmit(e) {
        e.preventDefault();

        if (password) {
            console.log("passwords do not match");
        }
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-blue-500">
            <div className="bg-white p-6 rounded-2xl">
                <h2 className="text-2xl font-bold text-blue-500 text-center mb-3">Login</h2>
                <form className="flex flex-col">
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" className="bg-blue-100 rounded mb-4"
                               onChange={handleLoginInputChange} value={email} required/>
                    </div>

                    <div>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" className="bg-blue-100 rounded mb-4"
                               onChange={handleLoginInputChange} value={password} required/>
                    </div>

                    <Link to="/reset-password">Forgot Password?</Link>

                    <div className="text-center">
                        <button type="submit" className="bg-blue-400 text-white px-4 py-2"
                                onClick={handleSubmit}>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}