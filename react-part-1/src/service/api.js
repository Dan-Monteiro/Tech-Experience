import axios from "axios";

export const jokeURL = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/'
});

export const webhook = axios.create({
    baseURL: 'https://webhook.site/cffa6cbb-122e-4a64-accb-b7cd9ce4ae93'
});
