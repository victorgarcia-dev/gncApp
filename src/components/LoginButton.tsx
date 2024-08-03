import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="text-white"  onClick={() => loginWithRedirect({appState:{returnTo:"/profile"}})}>sing in</button>;
};

export default LoginButton;