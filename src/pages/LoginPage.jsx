import { login } from "../api";
import { useForm } from "react-hook-form"
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { useState } from "react";

export default function LoginPage () {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const {
        handleSubmit,
        register,
        formState: { errors },
        setError,
    } = useForm()

    async function onSubmit(data) {
        try {
            const token = await login (data.username, data.password);
            if (token) {
                window.localStorage.setItem("token", token)
            toast.success("Pasele mijo")
            navigate("/productos")
            } else {
                toast.error("Usuario o contraseña incorrectos")
                setError("root.credentials", { 
                    type: "manual", 
                    message: "Credenciale invalidas"
                })
            }
            
        } catch (error) {
            toast.error("Error al iniciar sesión");
            console.error ("[login error]", error)
        }
    }

    function handleShowPassword() {
        setShowPassword (!showPassword) 
    }


    return (
        <main className="flex justify-center items-center flex-col gap-4 w-full min-h-dvh">
            <h1 className="text-4xl font-bold text-center">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} 
          className={clsx("border border-black rounded p-4 flex flex-col gap-4 max-w-sm w-full" , {
            "border-red-700": errors.root?.credentials, })}  >
            
            <input type= "text" 
            className="border border-black rounded p-2"
            placeholder="Nombre de usuario"
            {...register("username", {
                required: { value: true, message: "El nombre de usuario requerido"}
            })}  />
            <input 
            type= {showPassword ? "text": "password"}
            placeholder="Contraseña"
            className=" border border-black rounded p-1" {
                ...register ("password", {
                    required: {
                        value: true,
                        message: "Contraseña Requerida"
                    }
                })
            } />
            <span 
            className="text-xs text-black cursor-pointer hover: text-slate-800"
            onClick={handleShowPassword}>
                {showPassword ? "👁️Ocultar password" : "👁️mostrar password"} </span>
            
            <button className="border-black">Ingresar</button>
            {
                errors.root?.credentials && <p className="text-red-600 text-center">Credenciales invalidas</p>
            }
        </form>  
        </main>
        
    )
}