import axios from 'axios';

export const api_facts = axios.create({
    baseURL: 'https://meowfacts.herokuapp.com/'
})

export const api_photos = axios.create({
    baseURL: 'https://aws.random.cat/meow'
})