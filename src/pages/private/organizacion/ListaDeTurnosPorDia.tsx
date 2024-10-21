import { useState, useEffect, useContext } from "react";
import { es } from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, {registerLocale} from "react-datepicker";
import axios from "axios";
import { InfoOrganizationContext } from "../../../context/InfoOrganizationContext";

export const ListaDeTurnosPorDia = () => {

  const {infoOrganization} = useContext(InfoOrganizationContext);
  const [data, setData] = useState([]) //data api turnos
  const [fecha, setFecha] = useState(new Date()); //fecha actual datepicker
  const [fechaDatePicker, setFechaDatePicker] = useState("")
 
  //localizacion
  registerLocale('es', es)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/turnos/v1/organizacion/${infoOrganization.id}/users/${loadFromLocalStorage('idUser')}?fecha=${fechaDatePicker}`, {
          headers: {
            Authorization: `Bearer ${loadFromLocalStorage('id_token')}`,  // Agregar el token de autorización aquí
          },
        });
        setData(response.data || []);
      } catch (err) {
       console.log(err);
      }
    };

    fetchData();  // Llamar a la función asíncrona
  }, [fecha]);  //

  console.log(data)
   //obtener datos del localStorage
  const loadFromLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue || ""); // Convierte de JSON a su tipo original
  };

  const onChange = (fecha) => {
   setFecha(fecha);
   setFechaDatePicker(fechaFormateada(fecha))
   console.log(fecha);
  }

  const fechaFormateada = (fechaOriginal) => {
    const año = fechaOriginal.getFullYear();
    const mes = (fechaOriginal.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
    const día = fechaOriginal.getDate().toString().padStart(2, '0');
    return `${año}-${mes}-${día}`
  }
  
 
  return (
    <>
      <h2 className="text-center text-xl font-bold mt-4 mb-6 text-indigo-600">Lista De Turnos</h2>
      <div className="flex justify-center mb-4">
        <DatePicker
              locale={es}
              selected={fecha}
              onChange={(fecha) => onChange(fecha)}
              withPortal
              inline
        />
      </div>

      {
       data.length > 0 ? 
       <h3 className="ml-6 text-xl font-bold mt-4 mb-6 text-indigo-400">Lista de turnos</h3>
        : 
       <h3 className="ml-6 text-xl font-bold mt-4 mb-6 text-indigo-400">Dia Sin turnos </h3>
       }
     
     <div className="h-3/6 w-full overflow-y-scroll bg-gray-100 p-4">
        {
           data.map(item => (
            <div
              key={item.id}
              className="bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg font-bold">nombre: {item.nombreCompleto}</h3>
              <p className="text-gray-600">gmail: {item.email}</p>
            </div>
          ))
        }
      </div>

    </>
  )
}
