import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { activate, reset } from "../features/auth/authSlice.js";
import { useEffect } from "react";
import Spinner from "../components/Spinner.jsx";

export default function ActivatePage() {

    const { uid, token } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            uid,
            token,
        };
        dispatch(activate(userData));
        console.log("Your account has been activated. You can log in now!");
    }

    useEffect(() => {
        if (isError) {
            console.log(message);
        }

        if (isSuccess) {
            navigate("/login");
        }

        dispatch(reset());
    }, [isError, isSuccess, message]);

    return (
        <div className="w-screen h-[93vh] flex justify-center items-center bg-blue-500">
            <div className="bg-white p-6 rounded-2xl text-center">
                <h2 className="text-2xl font-bold text-blue-500 text-center mb-3">
                    Activate your account
                </h2>
                {isLoading ? <Spinner /> :
                    <button className="text-white font-bold bg-green-500 py-2 px-4 rounded"
                            onClick={handleSubmit}>Activate
                    </button>}

            </div>
        </div>
    );
}
