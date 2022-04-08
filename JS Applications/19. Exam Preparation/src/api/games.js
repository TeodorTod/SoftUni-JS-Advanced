import * as api from './api.js';


const endpoints = {
    games: '/data/cars?sortBy=_createdOn%20desc',
};

export async function getAll() {
    return api.get(endpoints.games);
}
