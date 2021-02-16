import React, { useState } from "react"

export default function  Main (){

const [nombre,setNombre] = useState([]);
const [cel,setCel] = useState([]);
const [correo,setCorreo] = useState([]);
const [info,setInfo] = useState([]);

function onName(event) {
    setNombre(event.target.value);
    }
function onCel(event) {
    setCel(event.target.value);
    }
function onInfo(event) {
    setInfo(event.target.value);
    }
function onCorreo(event) {
    setCorreo(event.target.value);
    }

let altaIn = [];
function alta(event) {
event.preventDefault();

const agregar = [{name:nombre,
                cel:cel,
                correo:correo,
                info:info
                }]
//altaIn = [...agregar];  
altaIn.push(agregar);            
console.log(altaIn)              
}    







  return(
      <div className="contenido">
         
          <div className="alta">
              <h1>Alta</h1>
              <form onSubmit={alta} >
              <input type="text" placeholder="nombre" onChange={onName}/>
              <input type="text" placeholder="celular" onChange={onCel}/>
              <input type="text" placeholder="correo" onChange={onCorreo}/>
              <input type="text" placeholder="info Adicional" onChange={onInfo}/><br/>
              <button>Add</button>
              </form>
              
              <h1>{nombre} {cel} {correo} {info}</h1>
              </div>

          <div className="estatus">
              <h1>Estatus</h1>
              <form>
              <input type="text" placeholder="Potencial"/>
              <input type="text" placeholder="No Potencial"/>
              <input type="text" placeholder="Interesado"/>
              <input type="text" placeholder="No intersado"/>
              </form>
              <button>Add</button>
          </div>
          <div className="alta">
              <h1>Procedencia</h1>
              <form>
              <input type="text" placeholder="Web"/>
              <input type="text" placeholder="Redes"/>
              <input type="text" placeholder="Ubicacion"/>
              <input type="text" placeholder="Recomendado"/>
              </form>
              <button>Add</button>
          </div>
          <div className="alta">
              <h1>Info Financiera</h1>
              <form>
              <input type="text" placeholder="Ingreso"/>
              <input type="text" placeholder="Gasto"/>
              <input type="text" placeholder="Ingreso neto"/>
              <input type="text" placeholder="Capacida de pago"/>
              </form>
              <button>Add</button>
          </div>
         
      </div>

  )  

}