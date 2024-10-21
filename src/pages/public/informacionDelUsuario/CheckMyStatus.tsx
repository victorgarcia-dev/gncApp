import {useForm} from 'react-hook-form';
import { ErrorMessage } from '../../../components/ErrorMessage';
import { PatenteFormData } from '../../../types';
import { useNavigate } from 'react-router-dom';



export const CheckMyStatus = () => {
  const navigate = useNavigate();

  //form
  const initialValues: PatenteFormData = {
        "patente":""
  }
  const {register, handleSubmit, formState: {errors}} = useForm({defaultValues:initialValues});

 const handleForm = async(data:PatenteFormData) => {
 
  navigate('/user');
 }

  return (
    <>
        <div className="mt-3
         flex min-h-full flex-col justify-center px-6 lg:px-8">
          <h2 className="font-bold text-black text-center font-xl pt-1 mb-6"><span className="text-black">Verificar </span>Mi Estado</h2>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' onSubmit={handleSubmit(handleForm)}
                  noValidate
            >
              <div>
                <label htmlFor="patente" className="block text-sm font-medium leading-3 text-black mb-4">Ingrese su numero de patente</label>
                <input id="patente" 
                      type="text" 
                      autoComplete='patente'
                      className="px-3 block w-full rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                      {...register("patente", {
                        required: "requiere una patente",
                      })}
                />
                {errors.patente && (
                        <ErrorMessage>{errors.patente.message}</ErrorMessage>
                  )}
              </div>

              <div>
                <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        type="submit"
                >COMPROBAR</button>
              </div> 
            </form>
          </div>
        </div>
    </>
  )
}