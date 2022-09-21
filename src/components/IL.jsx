import React from "react";
import Item from "./Item";

const IL = ({producto}) => {
    return(
            <div className="text-center">
                <h3 className="py-3">Conoce nuestras lineas de productos!</h3>
                {producto.map(curso => (
                    <div key={curso.codigo} className="d-flex">
                        <Item img={curso.img} nombre= {curso.nombre} desc={curso.descripcion} />
                    </div>)
                    )}
            </div>
    );

}

export default IL;