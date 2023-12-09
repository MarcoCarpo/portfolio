import axios from 'axios';
import { UserJson } from './helpers/interfaces';

const api = axios.create({
    baseURL: '/.netlify/functions/',
});

export const getData = async () => {
    const res = await api.get<UserJson>('/getProfileData');
    return res.data;
};

export default api;
