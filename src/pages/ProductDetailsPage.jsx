import { useEffect, useState } from "react"
import { useParams  } from "react-router-dom"
import { getProductsById } from "../api"
import { toast } from "sonner"
import { Link } from "react-router-dom"

export default function ProductsDetailPage () {
    const { id } = useParams()
    const [product, setProduct ] = useState ({})

    useEffect (() => {
        getProductsById(id) 
        .then ((prod) => {
            setProduct(prod)
            console.log(prod)
        }).catch ((error) => {
            toast.error("No se encontro informacion del producto")
        })

    }, [])

    return(
        <main>
            <section className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-5xl"> Product Detail #{id} </h1>
                <article className="text-center font-semibold text-white bg-slate-600 rounded-xl p-10 mx-24 my-10 max-w-xl" >
                <img className="max-w-md mx-auto" src={product.thumbnail} alt=""/>
                <p >{product.title}</p>
                <p >{product.description}</p>
                <p className="m-2">${product.price}</p>
                </article>
                <Link to="../Productos" className="rounded-xl text-white
                 bg-zinc-500 max-w-sm p-4 mx-auto">Atras</Link>
            </section>
            
        </main >
    )
}