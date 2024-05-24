import './Sign.css';
import img from '../assets/images/img1.jpg'
import img1 from '../assets/images/google.png'
import {Link} from 'react-router-dom'

export default function Sign(){
    return(
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
     
         <div className="row border rounded-5 p-3 bg-white shadow box-area">
   
         <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{background:" #103cbe;"}}>
             <div className="featured-image mb-3">
              <img src={img} className="img-fluid" style={{width: "270px;",height:"430px",marginTop:"60px",borderRadius:"6px"}}/>
             </div>
             <p className="text-white fs-2" style={{fontFamily:" 'Courier New', Courier, monospace; font-weight: 600;"}}>Be Verified</p>
             <small className="text-white text-wrap text-center" style={{width: "17rem;font-family: 'Courier New', Courier, monospace;"}}>Join experienced Designers on this platform.</small>
         </div> 
     
          
         <div className="col-md-6 right-box sign">
            <div className="row align-items-center">
                  <div className="header-text mb-4">
                       <h2>Créer un compte :</h2>
                  </div>
                  <div className="input-group mb-3">
                      <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Nom complet"/>
                  </div>
                  <div className="input-group mb-3">
                      <input type="mail" className="form-control form-control-lg bg-light fs-6" placeholder="Email address"/>
                  </div>
                  <div className="input-group mb-1">
                      <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Password"/>
                  </div>
                  <div className="input-group mb-1">
                      <input type="password" class="form-control form-control-lg bg-light fs-6" placeholder="Confirme Password" style={{marginTop:"12px"}}/>
                  </div>
                  <div className="input-group mb-5 d-flex justify-content-between">
                      <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="formCheck"/>
                          <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                      </div>
                  </div>
                  <div className="input-group mb-3 but">
                      <button className="btn btn-lg btn-primary w-100 fs-6 " >Créer un compte</button>
                  </div>
                  <div className="input-group mb-3">
                      <button className="btn btn-lg btn-light w-100 fs-6"><img src={img1} style={{width:"20px" }}className="me-2"/><small>créer un compte with Google</small></button>
                  </div>
                  
            </div>
            
         </div> 
         <small className='home'>Back to? <Link to="/" className='link'>Home</Link></small>
        </div>
        
      </div>
    )

}