import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../auth/LoginButton";
import LogoutButton from "../../auth/LogoutButton";


export const Header = () => {
  const {user, isAuthenticated } = useAuth0();

  const {pathname} = useLocation();

    return (
     <>
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
               {
                 pathname === '/' ?  <LoginButton/> : ""  //sino estaen el path('/'), no muestra el componente
               }
             </div>
           </>
        }
     </>  
    )
}
  