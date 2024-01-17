import { useState } from "react"
import "./formulario.css"

export function Captura (){
    const [nombre, setnombre]= useState("")
    const [apm , setapm]= useState("")
    const [app, setapp]= useState("")
    const [error, seterror]= useState(false)
    const handleSubmit= (e) =>{
        e.preventDefault()
        if(nombre ==""){
            seterror(true)
            return
        }
        seterror(false)
    }

    return(
        <section >
            <div className="formulario">
            <h1> Captura</h1>
            <form action="" className="inputContainer" onSubmit={handleSubmit} >
                <input type="text" className="inputBox" placeholder="Nombre" value={nombre} onChange={e=> setnombre(e.target.value)}/>
                <input type="text" className="inputBox" placeholder="Apellido Paterno" value={app} onChange={e=> setapp(e.target.value)}/>
                <input type="text" className="inputBox" placeholder="Apellido Materno" value={apm} onChange={e=> setapm(e.target.value)}/>
                <button className="button">Registrar</button>
            </form>
            {error && <p>Te faltan datos </p>}
            </div>
        </section>
    )
}