import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { handleResponse } from './auth';


export const createPost = (post, token) => {
    return fetch(`${API}/post`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: post
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listJobs = () => {
    return fetch(`${API}/jobPosting`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listPostsWithType = (type) => {
    return fetch(`${API}/posts/${type}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singlePost = (id) => {
    return fetch(`${API}/jobposting/${id}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));

}

export const removePost = (id, token) => {
    return fetch(`${API}/post/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleEmployer = (id) => {
    return fetch(`${API}/employer/${id}`, {
        method: 'GET',
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));

}

export const listEmployers = () => {
    return fetch(`${API}/employer`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
