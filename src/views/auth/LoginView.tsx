import { ErrorMesage } from "../../components/ErrorMesage";
import { useForm } from "react-hook-form";
import { UserLoginform } from "../../types";


export const LoginView = () => {
    const initialValues: UserLoginform = {
        email: '',
        password: '',
      }
      const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })
    
      const handleLogin = (formData: UserLoginform) => { 
        console.log(formData);
      }
    
      return (
        <div className="bg-yellow-600">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-8 p-10 bg-white"
            noValidate
          >
            <div className="flex flex-col gap-5">
              <label
                className="font-normal text-2xl"
              >Ingrese  Hito</label>
    
              <input
                id="hito"
                type="" 

                placeholder="hito de Registro"
                className="w-full p-3  border-gray-300 border"
                {...register("email", {
                  required: "El Email es obligatorio",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "E-mail no válido",
                  },
                })}
              />
              {errors.email && (
                <ErrorMesage>{errors.email.message}</ErrorMesage>
              )}
            </div>
    
            <div className="flex flex-col gap-5">
              <label
                className="font-normal text-2xl"
              >Password</label>
    
              <input
                type="password"
                placeholder="Password de Registro"
                className="w-full p-3  border-gray-300 border"
                {...register("password", {
                  required: "El Password es obligatorio",
                })}
              />
              {errors.password && (
                <ErrorMesage>{errors.password.message}</ErrorMesage>
              )}
            </div>
    
            <input
              type="submit"
              value='Iniciar Sesión'
              className="bg-fuchsia-600 hover:bg-fuchsia-700 w-full p-3  text-white font-black  text-xl cursor-pointer"
            />
          </form>
        </div>
      )
}