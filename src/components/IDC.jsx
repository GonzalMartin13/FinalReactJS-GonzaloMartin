import React, {useEffect, useState} from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ID from "./ID";


const IDC = () => {    
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const querydb = getFirestore();
        const queryDoc = doc(querydb, "LineasProds", {id} );
        getDoc(queryDoc) .then (res => setProduct({id : res.id, ...res.data()}) )

    }, []);

    console.log({product});
    return(
        <div className="d-flex IDC">
            <ID item={product}/>

        </div>
    )
}

export default IDC;