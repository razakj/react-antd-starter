import {get, post} from './_fetch';

const login  = (email, password) => post('/auth/login', {email, password});
const logout = (email, password) => post('/auth/logout', {email, password});

export default {login, logout}