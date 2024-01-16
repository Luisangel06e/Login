import { Link } from "react-router-dom"
import "./formulario.css"

export function Home({user, setuser}){
    
    const handleLogout =() => {
        setuser([])
    }
    return(
        <div className="formulario">

            <h1>Bienvendido {user}</h1>
            <Link to= {"/Captura"}><button >capturar</button></Link>
            
        </div>

    )
}