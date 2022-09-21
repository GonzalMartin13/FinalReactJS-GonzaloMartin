import React, { useEffect } from "react";
import "./Compo.css";
import IL from "./IL";
import { useState } from "react";
import {productos} from "./productos";

const ITC = () =>{

    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        const promesa = new Promise ((resolve,reject) => {
            setTimeout(() =>{
                resolve(productos);
            }, 500);
        });

        promesa.then((respuesta) => {
            setCursos(respuesta);
        });

    }, []);

    return(
        <div className="ITC">
            <IL producto = {cursos}/>
        </div>
    );
}

export default ITC; 