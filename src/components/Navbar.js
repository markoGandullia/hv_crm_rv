import React from "react"
import {Link} from "react-router-dom"

function barrra (){
return(
 <div >
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
      <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/Login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Main">AlTA</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Reporte">REPORTE</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" 
          to="#" >DESEMPEÑO</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

 </div>
);


}
export default barrra;
