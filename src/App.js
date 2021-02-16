import './styles.css';
import './index.css';

import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { BrowserRouter, Route } from "react-router-dom";
import login from './components/Login';
import Carrusel from './components/Carrusel';
import Reporte from './components/Reporte';


export default function App() {

//firebase login
//firebase init inicializa dentro del root
// npm run build  x hacer producion el proyecto final
//firebase deploy

//te da esto
//Project Console: https://console.firebase.google.com/project/hvcrm-24530/overview
//Hosting URL: https://hvcrm-24530.web.app
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    
    <div className="container"> 
    <Carrusel/> 
      
      <Route exact path="/Login" component={login} />
      <Route exact path="/Main" component={Main} />
      
      <Route exact path="/Reporte" component={Reporte}/>
    
    </div>
      </BrowserRouter> 
    </>
      
  );
}


//https://codesandbox.io/s/conduit-1o663?file=/src/components/Navbar.js