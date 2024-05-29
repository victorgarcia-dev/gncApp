import { useContext } from "react";
import { ShowDataUser } from "../components/ShowDataUser";
import { UserDataContext } from "../context/UserDataContext";


export const ShowUserStatus = () => {

  const {usuario} = useContext(UserDataContext);

  return (
    <div className="overflow-hidden">
      <div className="mx-4 my-4">
          <div className="mb-2">
            { !usuario ?  <h2 className="text-sm text-white font-medium">Datos del Propietario: No Existe</h2> : ""}
          </div>
          
          {
            !usuario ? <h3 className="text-white">No se Encontro al usuario</h3> : <ShowDataUser/> 
          }
      </div>
    </div>
  )
}
