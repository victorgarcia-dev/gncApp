import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../auth/LoginButton";
import LogoutButton from "../../auth/LogoutButton";
import { useEffect } from "react";


export const Header = () => {
  const {isAuthenticated } = useAuth0();

  const {pathname} = useLocation();

  useEffect(() => {
   if(pathname === '/'){
  
   }

  }, [])
   
    return (
     <>
        {
           isAuthenticated ? 
           <>
             <div className="mx-4 flex justify-between items-center">
               <h1 className="text-lg text-indigo-500 font-bold">SOLUCIONES GNC <br/><span className="text-sm font-medium">OBLEA - P.H - CONVERSIONES</span></h1>
               <LogoutButton/> 
             </div>
           </> 
          : 
           <>
             <div className="mx-4 py-5 flex justify-between items-center">
               <h1 className="text-lg text-indigo-500 font-bold">SOLUCIONES GNC <br/><span className="text-sm text-black font-medium">OBLEA - P.H - CONVERSIONES</span></h1>
               {
                 pathname === '/' ?  <LoginButton/> : ""  //sino estaen el path('/'), no muestra el componente
               }
             </div>
           </>
        }
     </>  
    )
}
  