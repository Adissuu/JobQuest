import fetch from "isomorphic-fetch";
import { API } from '../config';
import { handleResponse } from "./auth";


export const appPublicProfile = (username) => {
    return fetch(`${API}/applicant/${username}`, {
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

export const createApplicant = (token, user) => {
    return fetch(`${API}/applicant/add`, {
        method: 'Post',
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



export const getAppProfile = (token) => {
    return fetch(`${API}/applicant/profile`, {
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

export const updateApplicant = (token, user) => {
    return fetch(`${API}/applicant/update`, {
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