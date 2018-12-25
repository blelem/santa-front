
const axios = require('axios');

const santaService = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 10000,
});

// Make a request for a user with a given ID

export const santaApi = {
    getWishes() {
        return santaService.get('/wishes')
    },
}
