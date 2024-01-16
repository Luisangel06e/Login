import { Link } from "react-router-dom"
import "./formulario.css"

import { useState } from "react"
export function Login({setuser}){
    const [usuario, setusuario]= useState("")
    const [contraseña , setcontraseña]= useState("")
    const [error, seterror]= useState(false)
    const password={
        contraseña: /^.{10}$/
    }
    const handleSubmit= (e) =>{
        e.preventDefault()
        if(usuario =="" || contraseña =="" ){
            seterror(true)
            return
        }
        seterror(false)
        setuser([usuario])
    }
    return (
        <section className="formulario">
            <h1> Login</h1>
            <form action="" className="formulario" onSubmit={handleSubmit} >
                <input type="text" placeholder="Usuario" value={usuario} onChange={e=> setusuario(e.target.value)}/>
                <input type="password" placeholder="Contaseña" pattern="[0-9]*" value={contraseña.password} onChange={e=> setcontraseña(e.target.value)}/>
                <Link to={"/home"}><button href="./home">iniciar sesion</button></Link>
                
            </form>
            {error && <p>Te faltan datos </p>}
        </section>
    )
}