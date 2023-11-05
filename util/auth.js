const server = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQpOkX0HwpEoJPNroFuPRDn-w_6Ru64_c'

 function createUser (){
    axios.post(server,
        {
            email: email,
            password: password,
            returnSecureToken: true
        })
}
export default createUser;