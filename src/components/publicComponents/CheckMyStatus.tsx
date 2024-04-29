import { useState, useContext } from 'react';
import {useForm} from 'react-hook-form';
import { ErrorMesage } from '../ErrorMesage';
import { PatenteFormData } from '../../types';
import { usuarios } from '../../data/dataUser';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../../context/UserDataContext';





export const CheckMyStatus = () => {

  const navigate = useNavigate();
  const {setUser} = useContext(UserDataContext);
  const [dataUsers , setDataUsers] = useState(usuarios);


  const initialValues: PatenteFormData = {
        "patente":""
  }
  const {register, handleSubmit, formState: {errors}} = useForm({defaultValues:initialValues});

 const handleForm = (data:PatenteFormData) => {

  const userFilterData = usuarios.filter(user => user.Dominio === data.patente);
  setUser(userFilterData[0]);
  navigate('/home/user');
 }

 

  return (
    <>
        <div className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-yellow-500 via-gray-800 to-black h-40">
          <h2 className="font-bold text-center text-yellow-950 font-xl pt-3"><span className="text-yellow-500">Verificar</span>Mi Estado</h2>
          <form onSubmit={handleSubmit(handleForm)}
                noValidate
          >
            <div className="m-2 px-1 text-center">
              <label className="text-white"
                    htmlFor='patente'
              >
                Ingrese su numero de patente
              </label>
              <input className="px-2 rounded-md"
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
              <input className="bg-yellow-500 hover:bg-yellow-600 w-6/12 h-8 rounded-md text-white font-bold"
                    type='submit'
                    value="Comprobar"
              />
            </div>
          </form>
        </div>
    </>
  )
}