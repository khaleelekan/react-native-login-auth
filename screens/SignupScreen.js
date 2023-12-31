import { useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay'
import createUser from '../util/auth';

function SignupScreen() {
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
   return <AuthContent onAuthenticate={signUpHandler}/>;
}
}

export default SignupScreen;
