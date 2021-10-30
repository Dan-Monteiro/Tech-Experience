import axios from 'axios';

const animes = axios.create({
    baseURL: 'https://api.jikan.moe/v3/'
});

export default animes;

//https://api.jikan.moe/v3/search/anime?q=nome
