import React from 'react'
import ReactDom from 'react-dom/client'
import {Boton} from './Ejemplo' 
import {Tarjeta} from './Tarjeta'
import {EjemploClase} from './EjemploTres'
import {Posts} from './Peticiones'


const root = ReactDom.createRoot(document.getElementById('root'))


function Saludar() {
const Nombre = 'Valeria' 
    return <div>
        <h1>Hola {Nombre}</h1>
        <p1>lorem</p1>
    </div>

}

root.render(
<> 
    <Boton text = 'Aceptar'/> 
    <Tarjeta Estatus = {true}/>
    <EjemploClase/>

    <Posts/>
</>
 
)