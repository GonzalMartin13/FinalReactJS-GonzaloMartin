import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ID from "./ID";
import {productos} from "./productos";

const IDC = () => {    
    const [product, setProduct] = useState({});
    const {id} = useParams();
    console.log(id);

    useEffect(()=>{
        const getProduct = () => 
            new Promise ((res, rej) =>{
                const cursos = productos.find((producto) => producto.nombre === id);
                setTimeout (() =>{
                    res(cursos);
                }, 500);
            });

            getProduct()
            .then ((cursos)=>{
                setProduct(cursos)
                
            })
            .catch ((error) =>{
                alert ("ERROR")
            })
    }, []);

    console.log({product});
    return(
        <div className="d-flex IDC">
            <ID item={product}/>

        </div>
    )
}

export default IDC;