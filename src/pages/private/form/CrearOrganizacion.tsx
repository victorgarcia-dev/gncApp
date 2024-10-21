import { ErrorMessage } from "../../../components/ErrorMessage";
import { useForm } from "react-hook-form";
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { useEffect } from "react";


type Organization = {
  id: number,
  nombre: string,
  razonSocial: string,
  cuit: string,
  intervaloPorHorario: number,
  direccion: string,
  telefono: string,
  email: string,
  uid: string,
  tipoOrganizacionId: number,
  localidadId: number
}

export const CrearOrganizacion = () => {


  const [isOpen, setIsOpen] = useState(false)
  const [idToken, setIdToken] = useState("");
  const {user,} = useAuth0();
  console.log(user?.sub)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

//auth0_id
const str = user?.sub;
const result = str?.substring(6); // Reemplaza el inicio de la cadena


  const initialValues: Organization = {
    id: 0,
    nombre: "",
    razonSocial: "",
    cuit: "",
    intervaloPorHorario: 0,
    direccion: "",
    telefono: "",
    email: "",
    uid: result || "",
    tipoOrganizacionId: 1,
    localidadId: 1
  };

  //recuperar localstorage
  const loadFromLocalStorage = (key: string) => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue || ""); // Convierte de JSON a su tipo original
  };

useEffect(() => {
    // Cargar el usuario desde Local Storage al montar el componente
    const savedIdToken = loadFromLocalStorage('id_token');
    if (savedIdToken) {
     setIdToken(savedIdToken)
    }

    //guardar idUser localstorage
    saveToLocalStorage('idUser',result)
  }, []);

  //guardar localstorage idUser
  const saveToLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value)); // Convierte el valor a JSON
  };
  

  const { register, handleSubmit, formState:{errors}} = useForm({defaultValues:initialValues});
  
  const handleCreateOrganization = (formData: Organization) => { 
     console.log(formData);

     axios
      .post("https://fzwnfezda1.execute-api.us-east-1.amazonaws.com/test/organizacion/v1", formData,{
        headers: {
          Authorization: `Bearer ${idToken}`,  // Incluye el Bearer token en los headers
          'Content-Type': 'application/json' // Asegúrate de que el tipo de contenido sea JSON
        },
      })
      .then((response) => {
        console.log("Respuesta del servidor:", response.data);
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
      });
     setIsOpen(false)
  }

  return (
   <>  
        <button
          
          onClick={openModal}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Crear Organización
        </button>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="isolate bg-white px-6 py-4 sm:py-3 lg:px-8 rounded">
                  <div className="mx-auto max-w-2xl text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Crear Organización<nav>  </nav></h2>
                      <p className="mt-2 text-lg leading-8 text-gray-600">
                        por favor, complete los siguientes campos
                      </p>
                  </div>
                </div>

                <form className="mx-auto mt-10 max-w-xl sm:mt-10" onSubmit={handleSubmit(handleCreateOrganization)}>
                      <div className='sm:col-span-2'>
                    <label htmlFor="nombre" className="block text-sm font-semibold leading-6 text-gray-900">
                      Nombre de su Organización
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="nombre"
                        type="text"
                        autoComplete="nombre"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register("nombre", {
                          required: "El nombre de la organización es obligatorio",
                      })}
                      />
                      {errors.nombre && (
                            <ErrorMessage>{errors.nombre.message}</ErrorMessage>
                      )}
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                      <label htmlFor="razonSocial" className="block text-sm font-semibold leading-6 text-gray-900">
                        Razon Social
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="razonSocial"
                          type="text"
                          autoComplete="razonSocial"
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          {...register("razonSocial", {
                            required: "La razon social es obligatorio",
                        })}
                        />
                        {errors.razonSocial && (
                              <ErrorMessage>{errors.razonSocial.message}</ErrorMessage>
                          )}
                      </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor="cuit" className="block text-sm font-semibold leading-6 text-gray-900">
                      Cuit
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="cuit"
                        type="text"
                        autoComplete="cuit"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register("cuit", {
                          required: "El cuit es obligatorio",
                      })}
                      />
                      {errors.cuit && (
                            <ErrorMessage>{errors.cuit.message}</ErrorMessage>
                        )}
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor="intervaloPorHorario" className="block text-sm font-semibold leading-6 text-gray-900">
                      Intervalo por Horario
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="intervaloPorHorariot"
                        type="number"
                        autoComplete="intervaloPorHorario"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register("intervaloPorHorario", {
                          required: "El intervalo por horario es obligatorio",
                      })}
                      />
                      {errors.intervaloPorHorario && (
                            <ErrorMessage>{errors.intervaloPorHorario.message}</ErrorMessage>
                        )}
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label htmlFor="direccion" className="block text-sm font-semibold leading-6 text-gray-900">
                      Dirrecion de su Organización
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="direccion"
                        type="text"
                        autoComplete="direccion"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        {...register("direccion", {
                          required: "La dirección de su organización es obligatorio",
                      })}
                      />
                      {errors.direccion && (
                            <ErrorMessage>{errors.direccion.message}</ErrorMessage>
                        )}
                    </div>
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

                  <div className="mt-10">
                    <button
                    type="submit"
                    className="mb-2 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Crear Organización
                    </button>
                    <button
                    type="button"
                    onClick={() =>closeModal()}
                    className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Cancelar
                    </button>
                  </div>
                 </form>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>      
   </>
  )
}
