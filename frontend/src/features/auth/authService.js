import axios from "axios";

const BACKEND_DOMAIN = "http://127.0.0.1:8000";

const REGISTER_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/`;
const LOGIN_URL = `${BACKEND_DOMAIN}/api/v1/auth/jwt/create/`;
const ACTIVATE_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/activation/`;
const RESET_PASSWORD_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/reset_password/`;
const RESET_PASSWORD_CONFIRM_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/reset_password_confirm/`;
const GET_USER_INFO_URL = `${BACKEND_DOMAIN}/api/v1/auth/users/me/`;

async function register(userData) {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await axios.post(REGISTER_URL, userData, config);

    return response.data;
}

async function login(userData) {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await axios.post(LOGIN_URL, userData, config);

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}

function logout() {
    return localStorage.removeItem("user");
}

async function activate(userData) {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await axios.post(ACTIVATE_URL, userData, config);

    return response.data;
}

async function resetPassword(userData) {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await axios.post(RESET_PASSWORD_URL, userData, config);

    return response.data;
}

async function resetPasswordConfirm(userData) {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await axios.post(RESET_PASSWORD_CONFIRM_URL, userData, config);

    return response.data;
}

async function getUserInfo(accessToken) {
    const response = await axios.get(GET_USER_INFO_URL, {
        headers: {
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json",
        },
    });

    return response.data;
}

const authService = { register, login, logout, activate, resetPassword, resetPasswordConfirm, getUserInfo };

export default authService;
