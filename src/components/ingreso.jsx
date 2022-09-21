import React from "react";
import { Link } from "react-router-dom";
import Btn from "./boton";
import "./Compo.css";

const Ingreso = () =>{
    return (
        <div className="Ingreso">
                <div class="text-center" id="CuadroCentral" >
                    <div id="contenidoBienvenida" class="row p-5">
                        <Link to="/" class="IngresoH1"><h1> Bienvenido <br/> <b>La Tienda Del Mueble</b></h1></Link>
                        <input type="text" class="text-center my-3" id="email" value="" placeholder="Nombre de Cuenta"/>
                        <input className="mb-2 text-center" type="password" class="text-center mb-3" id="pass" value="" placeholder="Contraseña"/>
                        <Btn label="Ingresas"/>
                    </div> 
                </div>
        </div>
    );
}

export default Ingreso; 