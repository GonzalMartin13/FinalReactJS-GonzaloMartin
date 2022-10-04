import React, { useEffect } from "react";
import "./Compo.css";
import IL from "./IL";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";


const ITC = () =>{

    const [cursos, setCursos] = useState([]);
    useEffect(() => {
        const querydb = getFirestore();
        const queryColection = collection(querydb, "LineasProds");
        const queryFilter = query(queryColection, where("cat", "==", "combo"));
        getDocs (queryFilter) 
            .then(res => setCursos(res.docs.map(prod => ({id : prod.id, ...prod.data()}))))


    }, []);

    

    return(
        <div className="ITC">
            <IL producto = {cursos}/>
        </div>
    );
}

export default ITC; 