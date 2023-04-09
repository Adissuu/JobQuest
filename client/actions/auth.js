import _fetch from "isomorphic-fetch";
import cookie from 'js-cookie';
import { API } from '../config';
import Router from "next/router";

export const handleResponse = response => {
    if (response.status === 401) {
        signout(() => {
            Router.push({
                pathname: '/signin',
                query: {
                    message: 'Your session is expired. Please sign in.'
                }
            });
        });
    }
};

export const signup = (user) => {
    console.log(user)
    return fetch(`${API}/api/user/signup`, {
        //mode: 'no-cors',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => console.log(`here ${err}`))
}

export const signin = (user) => {
    return fetch(`${API}/api/user/login`, {
        //mode: 'no-cors',
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const signout = (next) => {
    removeCookie('token');
    removeLocalStorage('user');
    next();

    return fetch(`${API}/signout`, {
        method: 'GET'
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err));
}



//set cookie
export const setCookie = (key, value) => {
    if (typeof window !== 'undefined') {
        cookie.set(key, value, {
            expires: 1
        });
    }
};
export const removeCookie = (key) => {
    if (typeof window !== 'undefined') {
        cookie.remove(key, {
            expires: 1
        });
    }
};

//get cookie
export const getCookie = (key) => {
    if (typeof window !== 'undefined') {
        return cookie.get(key);
    }
};

//localstorage
export const setLocalStorage = (key, value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const removeLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key)
    }
}

// authenticate
export const authenticate = (data, next) => {
    console.log(`here ${data}`)
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    next();
};

export const isAuth = () => {
    if (typeof window !== 'undefined') {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else return false;
        }
    }
};

export const updateUser = (user, next) => {
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('user')) {
            let auth = JSON.parse(localStorage.getItem('user'));
            auth = user;
            localStorage.setItem('user', JSON.stringify(auth));
            next();
        }
    }
};
