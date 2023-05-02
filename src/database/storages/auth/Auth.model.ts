export const AUTH_STORE = 'auth';

export enum AuthFields {
    login = 'login',
    password = 'password'
}

export const initAuthModel = {
    name: AUTH_STORE,
    keys: Object.keys(AuthFields).map(key => key)
}