import { useContext } from "react";
import { ShowDataUser } from "../components/ShowDataUser";
import { UserDataContext } from "../context/UserDataContext";


export const ShowUserStatus = () => {

  const {usuario} = useContext(UserDataContext);

  return (
    <>
      <div className="py-5">
         { !usuario ?  <h2 className="text-base text-white font-medium">Datos del Propietario: No Existe</h2> : <h2 className="text-base text-white font-medium">Datos del Propietario: {usuario.Propietario_Nombre_y_Apellido}</h2>}
      </div>
      
      {
        !usuario ? <h3 className="text-white">No se Encontro al usuario</h3> : <ShowDataUser/> 
      }
    </>
  )
}
