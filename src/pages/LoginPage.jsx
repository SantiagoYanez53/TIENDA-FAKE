import { login } from "../api";
import { useForm } from "react-hook-form"
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


export default function LoginPage () {
    const navigate = useNavigate()
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm()

    async function onSubmit(data) {
        try {
            const token = await login (data.username, data.password);
            window.localStorage.setItem("token", token)
            toast.success("Pasele mijo")
            navigate("/productos")
        } catch (error) {
            toast.error("Error al iniciar sesión");
            console.error ("[login error]", error)
        }
    }


    return (
        <main className="flex justify-center items-center flex-col gap-4 w-full min-h-dvh">
            <h1 className="text-4xl font-bold text-center">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="border border-black rounded p-4 flex flex-col gap-4 max-w-sm w-full        ">
            
            <input type= "text" 
            className="border border-black rounded p-2"
            placeholder="Nombre de usuario"
            {...register("username", {
                required: { value: true, message: "El nombre de usuario requerido"}
            })}  />
            <input type= "password"
            placeholder="Contraseña"
            className=" border border-black rounded p-1" {
                ...register ("password", {
                    required: {
                        value: true,
                        message: "Contraseña Requerida"
                    }
                })
            } />
            <button className="border-black">Ingresar</button>
        </form>  
        </main>
        
    )
}