import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { InfoOrganizationContext } from "../../../context/InfoOrganizationContext";


 type HoursOrganization = {
      id: number,
      dia: string,
      horaDesde: string,
      horaHasta: string,
      organizacionId: number

}

export const HorariosOrganizacion= () => {

  const {infoOrganization} = useContext(InfoOrganizationContext);
  const [data, setData] = useState<HoursOrganization[]>([]);  // Estado para almacenar los datos

  // Función que transforma "09:00:00" a "09:00"
  const formatTime = (time: string) => {
    // Dividir la cadena en partes usando ":"
    const [hours, minutes] = time.split(':');
    // Retornar solo las horas y minutos
    return `${hours}:${minutes}`;
  };

  //obtener datos del localStorage
  const loadFromLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue || ""); // Convierte de JSON a su tipo original
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/OrganizacionHorarios/v1/organizacion/${infoOrganization.id}`, {
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

 const deleteHoursOrganization = (id:number) => {

  axios
  .delete(`https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/OrganizacionHorarios/v1/${id}/user/${loadFromLocalStorage('idUser')}`,{
    headers: {
      Authorization: `Bearer ${loadFromLocalStorage('id_token')}`,  // Incluye el Bearer token en los headers
      'Content-Type': 'application/json' // Asegúrate de que el tipo de contenido sea JSON
    },
  })
  .then((response) => {
    console.log("Respuesta del servidor:", response.data);
  })
  .catch((error) => {
    console.error("Error al enviar los datos:", error);
  });
   
 }

  return (
    <div className="mx-3">
     <h2 className="text-center text-xl font-bold mt-4 mb-6 text-indigo-600">Lista de Servicios</h2>
      <ul role="list" className="divide-y divide-gray-300">
      {data.map((schedule) => (
        <li key={schedule.id} className="flex justify-between gap-x-6 py-5">
        
            <div className="min-w-0 flex-auto">
              <p className="text-lg font-semibold leading-6 text-gray-900">Dia: {schedule.dia}</p>
              <p className="mt-1 font-bold truncate text-sm leading-5 text-gray-500">Horario de inicio: {formatTime(schedule.horaDesde)} hs</p>
              <p className="mt-1 font-bold truncate text-sm leading-5 text-gray-500">Horario de cierre: {formatTime(schedule.horaHasta)} hs</p>
            </div>
            <div className="mr-6">
                <button
                  className="h-10 w-full justify-center rounded-md bg-red-600 px-3  text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                  onClick={()=> deleteHoursOrganization(schedule.id)}
                >
                    Eliminar
                </button>
          </div>
        </li>
        ))}
      </ul>
   </div>
  );
};

