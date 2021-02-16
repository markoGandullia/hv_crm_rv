import React from "react"
import { BrowserRouter, Link, Route } from "react-router-dom";

const login = ()=>{
return (
    <section className="info">
      
        <form>
           <label>Usuario</label>
           <input type="text" placeholder="Ingresa tu usuario"></input>
           <label>Correo</label>
           <input type="text" placeholder="Ingresa tu correo"></input>
           <label>Pasword</label>
           <input type="text" placeholder="Ingresa tu Pasword"></input>
           <button type="submit"> <Link to="/Main">  Ingresar</Link></button>
      </form>
      </section>
);

}
export default login;
