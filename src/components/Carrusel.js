import react from "react"

const Carru = ()=>{
    return(
<div className="col-lg-12 col-xs-12">
<div id="carouselExampleControls"    className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/crm.jpg" className="d-block img-fluid w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="/images/inteligencia.jpg" className="d-block img-fluid w-100" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="/images/sofware.jpg" className="d-block img-fluid w-100" alt=""/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next"   href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>

           
    </div>
   
    

    );

}

export default Carru;