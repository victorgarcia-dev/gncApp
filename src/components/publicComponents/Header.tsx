import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";


export const Header = () => {
  const {user, isAuthenticated } = useAuth0();

    return (
     <div>
        {
           isAuthenticated ? 
           <>
             <div className="mx-4 py-5 flex justify-between items-center">
               <h1 className="text-lg text-indigo-500 font-bold">SOLUCIONES GNC <br/><span className="text-sm text-white font-medium">OBLEA - P.H - CONVERSIONES</span></h1>
               <LogoutButton/> 
             </div>
           </> 
          : 
           <>
             <div className="mx-4 py-5 flex justify-between items-center">
               <h1 className="text-lg text-indigo-500 font-bold">SOLUCIONES GNC <br/><span className="text-sm text-white font-medium">OBLEA - P.H - CONVERSIONES</span></h1>
               <LoginButton/>
             </div>
           </>
        }
     </div>  
    )
}
  