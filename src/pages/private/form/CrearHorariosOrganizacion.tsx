import { ErrorMessage } from '../../../components/ErrorMessage';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type FormValues = {
  dia: string,
  horaDesde: string,
  horaHasta: string,
  id: number,
  organizacionId: number
}

// Genera un array con todos los horarios de un día en intervalos de 1 hora
const generateHours = (): string[] => {
  const hours: string[] = [];
  for (let i = 0; i < 24; i++) {
    const hour = `${i.toString().padStart(2, '0')}:00:00`;
    hours.push(hour);
  }
  return hours;
};

export const CrearHorariosOrganizacion = () => {
  const navigate = useNavigate();

   //obtener datos del localStorage
   const loadFromLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue || ""); // Convierte de JSON a su tipo original
  };

  const initialValues: FormValues  = {
    "dia": "",
    "horaDesde": "",
    "horaHasta": "",
    "id": 0,
    "organizacionId": 2
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({defaultValues:initialValues});

  const onSubmit: SubmitHandler<FormValues> = formData => {
   
    axios
    .post(`https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/OrganizacionHorarios/v1/organizacion/user/${loadFromLocalStorage('idUser')}`, formData,{
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

     navigate('/organizationScheduleList')
    
  };

  const hours = generateHours();

  return (
    <div className="isolate bg-white px-6 py-4 sm:py-3 lg:px-8 rounded">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Crear Horarios de Atención</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          por favor, complete los siguientes campos
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-10 max-w-xl sm:mt-20">
      
        <div  className="flex flex-col">
          <div>
            <label htmlFor="dia" className="block text-sm font-semibold leading-6 text-gray-900">Selecciona el dia:</label>
            <select {...register("dia", { required: "Please select a day" })} id="dia" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option value="">Dias disponibles</option>
                <option value="lunes">Lunes</option>
                <option value="martes">Martes</option>
                <option value="miercoles">Miercoles</option>
                <option value="jueves">Jueves</option>
                <option value="viernes">Viernes</option>
                <option value="sabado">Sabado</option>
                <option value="domingo">Domingo</option>
            </select>
            {errors.dia && (
              <ErrorMessage>{errors.dia.message}</ErrorMessage>
            )}
          </div>

          <div className='flex justify-between mt-4'>
            <div className=''>
              {/* Select de Horarios */}
              <label htmlFor="hour" className="block text-sm font-semibold leading-6 text-gray-900">Hora Desde:</label>
              <select {...register("horaDesde", { required: "Please select an hour" })} id="hour" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <option value="">Horas disponibles</option>
                {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              {errors.horaDesde && (
              <ErrorMessage>{errors.horaDesde.message}</ErrorMessage>
               )}
            </div>
            <div>
              {/* Select de Horarios */}
              <label htmlFor="hour" className="block text-sm font-semibold leading-6 text-gray-900">Hora Hasta:</label>
              <select {...register("horaHasta", { required: "Please select an hour" })} id="hour" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option value="">Horas disponibles</option>
                  {hours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                  ))}
              </select>
              {errors.horaHasta && (
                <ErrorMessage>{errors.horaHasta.message}</ErrorMessage>
              )}
            </div>
          </div>
        </div>
     
       <div className='w-full flex justify-center'>
        <button type="submit" className="mt-4 w-1/3 bg-blue-500 text-white p-2 rounded">
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
