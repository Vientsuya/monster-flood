import {Link} from "react-router-dom"

export default function Homepage() {
    return (
        <div className="w-screen h-screen">
            <div className="text-center">Monster Flood</div>
            <div className="text-center">
                <button className="text-blue-500 font-bold mr-4"><a href="/register">Register</a></button>
                <button className="text-blue-500 font-bold"><a href="/login">Login</a></button>
            </div>
        </div>
    )
}