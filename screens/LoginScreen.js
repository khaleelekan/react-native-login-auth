import AuthContent from '../components/Auth/AuthContent';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function signUpHandler({email, password})
  {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }
 
if (isAuthenticating){ 
  return <LoadingOverlay message='creating user'/>
}else{
  return <AuthContent isLogin />;
}
}

export default LoginScreen;
