import React from "react";
import Contador from "./contador";

const ID = ({item}) => {
    return (
        <div key={item.codigo} className="row justify-content-center ">
            <img src={item.img} alt={item.nombre} className="col-6 IMGID p-3"/>
            <div className="col-6 text-center">
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <p>Precio: {item.precio}$</p>
                <Contador initial = {0} cantidad={item.stock} carro = {0} />
            </div>
        </div>
    )
}

export default ID; 