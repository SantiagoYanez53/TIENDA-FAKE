import { useEffect, useState } from "react"
import { getProducts } from "../api"
import { toast } from "sonner"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function ProductsPage () {
    /** cuando se ejecuta useEffect
     * 1- Al terminar de rendizar el componente.
     * 2. Al cambair alguna de las dependencias
     * 
     * 
     * recibe 2 parametros
     * 1. Una funcion a ejecutar
     * 2. Un arreglo de dependencias
     */

    const [ products, setProducts] = useState ([])
    const navigate = useNavigate()


    useEffect (() => {
        const token = localStorage.getItem("token")

        if(!token) {
            toast.error("Debes iniciar sesion para ver los productos")
            navigate("/login");
            return;
        }
        getProducts()
        .then( (prods) => {
            setProducts (prods)
        })
        .catch ((error) => {
            toast.error ("Error al obtener los productos")
            console.error("[getProducts error]", error)
        }) 
    }, [])

   
    return  (
        <main className="p-4">
            <h1 className="text-4xl text-center, font-bold ">PRODUCTOS</h1>
           <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {
                products.map ((product, idx)  => {
                    return (
                        <article key={`prod-${idx}`}
                        className="hover:bg-slate-500 cursor-pointer rounded p-4 flex flex-col justify-between">
                            <img src={product.thumbnail} alt={product.title}/>
                            <p className="text-lg">{product.title}</p>
                            <Link to={`/productos/${product.id}`}
                            className="bg-white/50 w-full p-2 rounded text-center"> Ver Detalle</Link>
                        </article>
                    )
                })
            }
           </section>
        </main>
    )
        
        


}