import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useLocation, useNavigate, } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../components/ErrorMessage';
import { UserLoginform } from '../../types';

export  function LoginView () {
    //estado del modal
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const modalLogin = queryParams.get('login');
    const show = modalLogin ? true : false;
    


    const navigate = useNavigate();
    const initialValues: UserLoginform = {
        hito: '',
        password: '',
      }
      const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })
    
      const handleLogin = (formData: UserLoginform) => { 
        console.log(formData);
        if(formData.hito == 'admin'){
          navigate('/dashboard');
        } else {
          navigate('/organization');
        }
        
      }

    return (
        <>
            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => navigate('/')}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60" />
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
                            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900 rounded-md">
                                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Iniciar sesión en su cuenta</h2>
                                    </div>

                                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                        <form className="space-y-6"
                                              onSubmit={handleSubmit(handleLogin)}
                                              noValidate
                                        >
                                        <div>
                                            <label htmlFor="email" className=" text-start block text-sm font-medium leading-6 text-white">Codigo de su Taller</label>
                                            <div className="mt-2">
                                            <input id="hito"  type="text" className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                  {...register("hito", {
                                                    required: "requiere un hito",
                                                  })}
                                            />
                                             {errors.hito && (
                                                <ErrorMessage>{errors.hito.message}</ErrorMessage>
                                            )}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                                            <div className="text-sm">
                                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">¿Has olvidado tu contraseña?</a>
                                            </div>
                                            </div>
                                            <div className="mt-2">
                                            <input id="password"  type="password" className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                   {...register("password", {
                                                    required: "El Password es obligatorio",
                                                  })}
                                            />
                                             {errors.password && (
                                                <ErrorMessage>{errors.password.message}</ErrorMessage>
                                             )}
                                            </div>
                                        </div>

                                        <div>
                                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                                        </div>
                                        </form>
                                    </div>
                            </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}