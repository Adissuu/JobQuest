import fetch from "isomorphic-fetch";
import { API } from '../config';
import { handleResponse } from "./auth";


export const RecPublicProfile = (username) => {
    return fetch(`${API}/recruiter/${username}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getRecProfile = (token) => {
    return fetch(`${API}/recruiter/profile`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            handleResponse(response);
            return response.json()
        })
        .catch(err => console.log(err))
}

export const updateRecruiter = (token, user) => {
    return fetch(`${API}/recruiter/update`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: user
    })
        .then(response => {
            handleResponse(response);
            return response.json()
        })
        .catch(err => console.log(err))
}