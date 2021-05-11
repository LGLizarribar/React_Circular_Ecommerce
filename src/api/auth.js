const registerUrl = "http://localhost:5000/auth/register";
const loginUrl = "http://localhost:5000/auth/login";
const checkSessionUrl = "http://localhost:5000/auth/check-session";
const logoutUrl = "http://localhost:5000/auth/logout";

export const register = async (userData) => {
    debugger;
    const request = await fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
        body: userData
    });

    const response = await request.json();

    if(!request.ok) {
        throw new Error(response.message);
    }

    return response;
};

export const login = async (userData) => {
    const request = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
        body: JSON.stringify(userData)
    });
    const response = await request.json();

    if(!request.ok) {
        throw new Error(response.message);
    }

    return response;
}

export const checkSession = async () => {
    const request = await fetch(checkSessionUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
    });

    const response = await request.json();

    return response;
}

export const logout = async () => {
    const request = await fetch(logoutUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
    });

    const response = await request.json();

    return response;
}