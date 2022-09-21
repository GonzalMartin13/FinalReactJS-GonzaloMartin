import React from "react";
import { Link } from "react-router-dom";
import "./Compo.css";

const Header = () => {
    return(
        <div className="row header">
            <div className="col-6">
                <ul className="row">
                    <li className="col-4">
                        <Link to="/" className="listnav"  aria-current="page" >#Tienda</Link>
                    </li>
                    <li class="col-2">
                        <Link className="listnav" to="/Living" >Living</Link>
                    </li>
                    <li class="col-2">
                        <Link className="listnav" to="/Dormitorio" >Dormitorio</Link>
                    </li>
                    <li class="col-2">
                        <Link className="listnav" to="/Comedor" >Comedor</Link>
                    </li>
                </ul>
            </div>
            <div className="justify-content-end col-6 nav"> 
            <span className="material-symbols-outlined mt-2 mx-3"> garden_cart </span>
            </div>
        </div>
    )
}

export default Header;