import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../components/ErrorMessage';

 type Turner= {
  name: string,
  lastName: string,
  phone: string,
  patent: string,
  workshop: string,
  day: string,
  hour: string
}

export const ScheduleShift = () => {

  const initialValues: Turner = {
    "name": "",
    "lastName": "",
    "phone": "",
    "patent":"",
    "workshop":"",
    "day":"",
    "hour":""
  };
  const { register, handleSubmit, formState:{errors}} = useForm({defaultValues:initialValues});
  
  const handleCreateTurner = (formData: Turner) => { 
      console.log(formData); 
    }

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
       
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Turnero</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          por favor, complete los siguientes campos
        </p>
      </div>
      <form  className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit(handleCreateTurner)}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nombre
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                type="text"
                autoComplete="nombre"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("name", {
                  required: "El nombre de la organización es obligatorio",
              })}
              />
              {errors.name && (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
              Apellido
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                type="text"
                autoComplete="apellido"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("lastName", {
                  required: "El nombre de la organización es obligatorio",
              })}
              />
              {errors.lastName && (
                    <ErrorMessage>{errors.lastName.message}</ErrorMessage>
                )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
              Telefono
            </label>
            <div className="mt-2.5">
              <input
                id="phone"
                type="text"
                autoComplete="phone"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("phone", {
                  required: "El nombre de la organización es obligatorio",
              })}
              />
              {errors.phone && (
                    <ErrorMessage>{errors.phone.message}</ErrorMessage>
                )}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="patent" className="block text-sm font-semibold leading-6 text-gray-900">
              Patente
            </label>
            <div className="mt-2.5">
              <input
                id="patent"
                type="text"
                autoComplete="patente"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("patent", {
                  required: "El nombre de la organización es obligatorio",
              })}
              />
              {errors.phone && (
                    <ErrorMessage>{errors.phone.message}</ErrorMessage>
                )}
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Taller
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <select
                  id="workshop"
                  name="workshop"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>ANFATA</option>
                  <option>Nova GNC</option>
                  <option>Pablo GNC</option>
                </select>
              </div>
              <input
                id="workshop"
                type="text"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="dia" className="block text-sm font-semibold leading-6 text-gray-900">
              Dia
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Dia
                </label>
                <select
                  id="dia"
                  name="dia"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>Lunes</option>
                  <option>Martes</option>
                  <option>Miercoles</option>
                  <option>Jueves</option>
                  <option>viernes</option>
                  <option>Sabados</option>
                </select>
              </div>
              <input
                id="dia"
                name="dia"
                type="text"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Hora
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  hora
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>8:00</option>
                  <option>8:30</option>
                  <option>9:00</option>
                  <option>10:30</option>
                  <option>11:30</option>
                </select>
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
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
  )
}
