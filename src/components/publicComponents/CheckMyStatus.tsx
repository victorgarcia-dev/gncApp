import {useForm} from 'react-hook-form';
import { ErrorMesage } from '../ErrorMesage';
import { PatenteFormData } from '../../types';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../api/getUserAPI';

export const CheckMyStatus = () => {

  const navigate = useNavigate();

  const initialValues: PatenteFormData = {
        "patente":""
  }
  const {register, handleSubmit, formState: {errors}} = useForm({defaultValues:initialValues});

 const handleForm = (data:PatenteFormData) => {
  getUser(data.patente);
  navigate('/home/user');
 }

  return (
    <>
        <div className="bg-gray-100 h-40">
          <h2 className="font-bold text-center text-fuchsia-600 font-xl pt-3"><span className="text-fuchsia-600">Verificar</span>Mi Estado</h2>
          <form onSubmit={handleSubmit(handleForm)}
                noValidate
          >
            <div className="m-2 px-1 text-center">
              <label className="text-black font-bold"
                    htmlFor='patente'
              >
                Ingrese su numero de patente
              </label>
              <input className="px-2 rounded-md bg-gray-300 placeholder-gray-400 font-medium mt-1 mb-2"
                    id='patente'
                    type="text" 
                    placeholder="ingrese aqui los datos" 
                    {...register("patente", {
                      required: "requiere una patente",
                  })}
              />
              {errors.patente && (
                      <ErrorMesage>{errors.patente.message}</ErrorMesage>
                )}
            </div>
            <div className="flex justify-center">
              <input className="bg-gray-500 hover:bg-gray-700 w-6/12 h-8 rounded-md text-white font-bold"
                    type='submit'
                    value="Comprobar"
              />
            </div>
          </form>
        </div>
    </>
  )
}