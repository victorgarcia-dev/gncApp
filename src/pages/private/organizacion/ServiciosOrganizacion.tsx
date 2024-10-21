import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { InfoOrganizationContext } from "../../../context/InfoOrganizationContext";

type ServicesOrganization = {
  id: number,
  nameService: string,
  costo: number,
  serviciosId: number,
  organizacionId: number

}


export const ServiciosOrganizacion = () => {

  const { infoOrganization } = useContext(InfoOrganizationContext)

  const [data, setData] = useState<ServicesOrganization[]>([]);


  //obtener datos del localStorage
  const loadFromLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue || ""); // Convierte de JSON a su tipo original
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/serviciosPorOrganizacion/v1/organizacion/${infoOrganization.id}`, {
          headers: {
            Authorization: `Bearer ${loadFromLocalStorage('id_token')}`,  // Agregar el token de autorización aquí
          },
        });
        setData(response.data);
      } catch (err) {
       console.log(err);
      }
    };

    fetchData();  // Llamar a la función asíncrona
  }, []);  //
  

 console.log(data)

  return (
   <div className="mx-3">
     <h2 className="text-center text-xl font-bold mt-4 mb-6 text-indigo-600">Lista de Servicios</h2>
      <ul role="list" className="divide-y divide-gray-300">
      {data.map((person) => (
        <li key={person.id} className="flex justify-between gap-x-6 py-5">
        
            <div className="min-w-0 flex-auto">
              <p className="text-lg font-semibold leading-6 text-gray-900">oblea</p>
              <p className="mt-1 font-bold truncate text-sm leading-5 text-gray-500">Costo: {person.costo}</p>
            </div>
            
            <button
              className="h-10 w-24 justify-center rounded-md bg-red-600 px-3  text-sm font-semibold text-white shadow-sm hover:bg-red-500"
            >
               Eliminar
            </button>
        </li>
        ))}
      </ul>
   </div>
  )
}
