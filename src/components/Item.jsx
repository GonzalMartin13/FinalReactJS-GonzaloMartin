import React from "react";
import { Link } from "react-router-dom";
import Btn from "./boton";

const Item = ({img, nombre, desc}) =>{
    return(
            <div className="row  IL">
                <img className="col-3 p-1" src={img} alt={nombre} />
                <div className="col-3 text-center container-fluid cartaItem "> 
                    <h3>{nombre}</h3>
                    <p>{desc}</p>
                    <Link to={nombre}><Btn label="Mas Info"/></Link>
                </div>
            </div>
    );
}

export default Item;