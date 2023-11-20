const server = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQpOkX0HwpEoJPNroFuPRDn-w_6Ru64_c'
import axios from 'axios';

const API = 'AIzaSyBQpOkX0HwpEoJPNroFuPRDn-w_6Ru64_c'

async function authenticate (mode ,email, password){
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API}`
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });
}
 export async function createUser (email, password){
 await authenticate ('signUp', email, password);
}
 export async function login (email, password){
 await authenticate ('signInWithPassword', email, password);
}