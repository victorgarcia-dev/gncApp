import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

import { withAuthenticationRequired } from '@auth0/auth0-react';


export const Header = () => {
  const {user, isAuthenticated } = useAuth0();

  if(isAuthenticated){
    return(
      <>
        <div className="mx-4 py-5 flex justify-between items-center">
          <h1 className="text-lg text-indigo-500 font-bold">SOLUCIONES GNC <br/><span className="text-sm text-white font-medium">OBLEA - P.H - CONVERSIONES</span></h1>
          <div className="">{user?.name}</div>
          <LogoutButton/> 
        </div>
      </>
      
    )
  }else{
    return (
      <>
        <div className="mx-4 py-5 flex justify-between items-center">
          <h1 className="text-lg text-indigo-500 font-bold">SOLUCIONES GNC <br/><span className="text-sm text-white font-medium">OBLEA - P.H - CONVERSIONES</span></h1>
          <LoginButton/>
        </div>
      </>
    )
  }

    
}
  