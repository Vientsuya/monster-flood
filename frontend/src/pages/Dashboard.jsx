import { useSelector } from "react-redux";

export default function Dashboard() {

    const { userInfo } = useSelector((state) => state.auth);

    return (
        <div>
            <h1>dashboard</h1>
            <p>Id: {userInfo.id}</p>
            <p>First Name: {userInfo.first_name}</p>
            <p>Last Name: {userInfo.last_name}</p>
            <p>Email: {userInfo.email}</p>
        </div>
    );
}
