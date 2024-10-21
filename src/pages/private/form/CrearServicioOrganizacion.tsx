import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


type Service = 
  {
    id: number,
    costo: number,
    serviciosId: number,
    organizacionId: number
}


export const CrearServicioOrganizacion = () => {


  const navigate = useNavigate();

  //obtener datos del localStorage
  const loadFromLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue || ""); // Convierte de JSON a su tipo original
  };


  const initialValues: Service = {
    "id": 0,
    "costo": 0,
    "serviciosId": 0,
    "organizacionId": 1
  }

  const { register, handleSubmit, formState:{errors}} = useForm({defaultValues:initialValues});



  const handleCreateTurner = (formData: Service) => { 

    axios
    .post(`https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/serviciosPorOrganizacion/v1/user/${loadFromLocalStorage('idUser')}`, formData,{
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

     navigate('/listServices')
}
  return (
    <div className="isolate bg-white px-6 py-4 sm:py-32 lg:px-8 rounded">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Crear Servicio</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
        por favor, complete los siguientes campos
      </p>
    </div>
    <form  className="mx-auto mt-10 max-w-xl sm:mt-20" onSubmit={handleSubmit(handleCreateTurner)}>   
        <div className="sm:col-span-2">
          <label htmlFor="costo" className="block text-sm font-semibold leading-6 text-gray-900">
            Costo del Servicio
          </label>
          <div className="mt-2.5">
            <input
              id="costo"
              type="number"
              autoComplete="costo"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("costo", {
                required: "El costo del servicio es obligatorio",
            })}
            />
            {errors.costo && (
                  <ErrorMessage>{errors.costo.message}</ErrorMessage>
              )}
          </div>
        
      </div>
  
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Crear Servicio
        </button>
      </div>
    </form>
  </div>
  )
}
