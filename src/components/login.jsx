import { Link } from "react-router-dom"
import "./formulario.css"

import { useState } from "react"
export function Login({setuser}){
    const [User, setUser]= useState("")
    const [contraseña , setPassword]= useState("")
    const [error, seterror]= useState(false)

    const handleSubmit= (e) =>{
        e.preventDefault()
        if(User === "" || contraseña === "" ){
            seterror(true)
            return
        }
        seterror(false)
        setuser([User])
    }

    return (
        <section className="formulario">
            <h1> Login</h1>
            <form action="" className="formulario" onSubmit={handleSubmit} >
                <input type="text" placeholder="Usuario" value={User} onChange={e=> setUser(e.target.value)}/>
                <input type="password" placeholder="Contaseña" pattern="[0-9]*" value={contraseña.password} onChange={e=> setPassword(e.target.value)}/>
                <Link to={"/home"}><button href="./home">iniciar sesion</button></Link>
                
            </form>
            {error && <p>Te faltan datos </p>}
        </section>
    )
}