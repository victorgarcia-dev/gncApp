import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { DateContext } from '../../../context/DateContext';
import { convertDate, modifyDate } from '../../../utils/convertirFechas';
import { postDataTurner } from '../../../api/postDataTurner';
import { useNavigate } from 'react-router-dom';


 type Turner= {
  fechaHora: string,
  nombreCompleto: string,
  telefono: string,
  email: string,
  descripcion: string,
  serviciosPorOrganizacionId: number,
  clienteId: number
}

export const CrearTurnoUsuarioOrganizacion = () => {
    const navigate = useNavigate();

  //context de la fecha
  const {userDate, userHour} = useContext(DateContext);
  const date = convertDate(modifyDate(userHour, userDate)); //modifico la fecha


  //informacion del tuno
 // const [infoTurner, setInfoTurner] = useState({});

 

  const initialValues: Turner = {
  fechaHora: date, //transfomor la fecha a YYYY-MM-DDTHH:mm:ss
  nombreCompleto: "",
  telefono: "",
  email: "",
  descripcion: "",
  serviciosPorOrganizacionId: 1,
  clienteId:0
  };


  const { register, handleSubmit, formState:{errors}} = useForm({defaultValues:initialValues});
  
  const handleCreateTurner = (formData: Turner) => { 
      postDataTurner(formData);
      navigate("/profile")
  }

  return (
    <>
      <div className="isolate bg-white px-6 py-4 sm:py-32 lg:px-8 rounded">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Turnero</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            por favor, complete los siguientes campos
          </p>
        </div>
        <form  className="mx-auto mt-10 max-w-xl sm:mt-20" onSubmit={handleSubmit(handleCreateTurner)}>
            <div className='sm:col-span-2'>
              <label htmlFor="nombreCompleto" className="block text-sm font-semibold leading-6 text-gray-900">
                Nombre y Apellido
              </label>
              <div className="mt-2.5">
                <input
                  id="nombreCompleto"
                  type="text"
                  autoComplete="nombreCompleto"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("nombreCompleto", {
                    required: "El nombre es obligatorio",
                })}
                />
                {errors.nombreCompleto && (
                      <ErrorMessage>{errors.nombreCompleto.message}</ErrorMessage>
                  )}
              </div>
            <div className="sm:col-span-2">
              <label htmlFor="telefono" className="block text-sm font-semibold leading-6 text-gray-900">
                Telefono
              </label>
              <div className="mt-2.5">
                <input
                  id="telefono"
                  type="text"
                  autoComplete="telefono"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("telefono", {
                    required: "El telefono es obligatorio",
                })}
                />
                {errors.telefono && (
                      <ErrorMessage>{errors.telefono.message}</ErrorMessage>
                  )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  type="text"
                  autoComplete="patente"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("email", {
                    required: "El Email es obligatorio",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "E-mail no válido",
                    },
                  })}
                />
                {errors.email && (
                      <ErrorMessage>{errors.email.message}</ErrorMessage>
                  )}
              </div>
            </div>
            <div className="sm:col-span-2">
            <label htmlFor="descripcion" className="block text-sm font-semibold leading-6 text-gray-900">
                Descripción
              </label>
              <div className='mt-2.5'>
                <textarea  
                        id="descripcion"
                        className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"  
                        autoComplete="descripcion"
                        {...register("descripcion", {
                          required: "Escriba una pequeña descripción",
                      })} 
                ></textarea>
                {errors.descripcion && (
                      <ErrorMessage>{errors.descripcion.message}</ErrorMessage>
                  )}
              </div>
            </div>
          </div>
      
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Agendar Turno
            </button>
          </div>
        </form>
      </div>
    </>
  )
}