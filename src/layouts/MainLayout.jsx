import { Link, Outlet, useNavigate } from "react-router-dom"

const links = [
    { to: "/", label: "Home", authRequired: false},
    {to: "/productos", label: "Products", authRequired:true},
    { to: "/login", label: "Login", authRequired:false}
]

export default function MainLayout () {
    const isAuth = !!localStorage.getItem("token")
    const navigate = useNavigate()
    function handleLogout () {
        localStorage.removeItem("token") 
            navigate("/")
        
    }
    
    return (
         <main >
            <nav className="bg-neutral-600 text-white flex flex-row justify-around text-lg font-semibold">
                {links.map ((link) => {
                    if(link.authRequired && !isAuth) return null
                    if(isAuth && link.to === "/login")return null;
                    return (
                        <Link key={`link-${link.to}`} to= {link.to} 
                        className="hover:bg-black/50 w-full text-center">{link.label}</Link>
                    )
                })}
                {isAuth && (
                    <button 
                    onClick={handleLogout}
                    className="hover:bg-black/50 w-full h-full text-center">Log Out</button >
                )}
            </nav>
            <Outlet/>

         </main>
    )
       
    
}