import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


export const CreateCarView = () => {
    const initialValues= {};
    const { register, handleSubmit, formState:{errors}} = useForm({defaultValues:{}});

  return (
    <>
        <h1 className="text-5xl font-black">Registrar Auto</h1>
        <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario</p>

        <nav className="my-5">
        <Link 
            className='bg-purple-400 hover:bg-purple-500 px-10 text-white text-xl font-bold cursor-pointer transition-colors'
            to='/'
        >
            Volver a Clientes
        </Link>

        </nav>
    </>
  )
}
