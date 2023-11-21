import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import  login from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function loginHandler({email, password})
  {
    setIsAuthenticating(true);
    try{
      await login (email, password);
    }catch (error){
      Alert.alert(
        'Authentication failed!',
        "could not log in. try again"
      );
    }
    setIsAuthenticating(false);
  }
 
if (isAuthenticating){ 
  return <LoadingOverlay message='login in ...'/>;
}

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}


export default LoginScreen;
