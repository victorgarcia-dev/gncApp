import { useAuth0 } from "@auth0/auth0-react";
import { FaCircleUser } from "react-icons/fa6";



const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();

  return <button onClick={() => loginWithRedirect({appState:{returnTo:"/profile"}})}>
     <FaCircleUser className="text-3xl text-indigo-500"/>
  </button>;
};

export default LoginButton;