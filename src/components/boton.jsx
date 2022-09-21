import React from "react";
import "./Compo.css";

const Btn = ({label}) =>{
    return(
        <div>
            <button className="Boton">{label}</button>
        </div>
    )
}

export default Btn;