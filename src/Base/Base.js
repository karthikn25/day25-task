import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../css/sb-admin-2.css';
import "../css/fontawesome-free/css/all.css";
import { useHistory } from "react-router-dom";




function Base({children}){
   const history=useHistory()
   
    return(
        
        
        <div className="base-design">
         
        <div className="left-content">
        
       <div className="font-style">
        <h4>
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>
        </h4>
        <br/>
        <hr className="sidebar-divider my-0"></hr>
        <a className="nav-link" href="#" >
             <i className="fas fa-fw fa-tachometer-alt"></i>
             <span
             onClick={()=>history.push("/")}
             >Dashboard</span>
        </a>
        <hr className="sidebar-divider my-0"></hr>
        <div className="sidebar-heading"> Interface</div>
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
        </a>
        
                    <div className="bg py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <ul>
                        <li><a className="collapse-item"  onClick={()=>history.push("/buttons")}
                         >Buttons</a></li> <br/>
                       <li> <a className="collapse-item"  onClick={()=>history.push("/cards")}
                         >Cards</a> </li> 
                        </ul>
                    </div>
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
        </a>
        
                    <div className="bg py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <ul>
                      <li>  <a className="collapse-item"  onClick={()=>history.push("/Colors")}
                         >Colors</a></li>  <br/>
                      <li>  <a className="collapse-item"  onClick={()=>history.push("/Borders")}
                         >Borders</a></li>  <br/>
                       <li> <a className="collapse-item"  onClick={()=>history.push("/Animations")}
                         >Animations</a></li>  <br/>
                       <li> <a className="collapse-item"  onClick={()=>history.push("/Other")}
                         >Other</a> </li> 
                        </ul>
                    </div>            
                   
        
       
        </div>
        </div>
        
        <div className="container">
        <div className="row top-bar">
        <div className="col-12">
        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div class="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
            <div class="input-group-append">
                <button className="btn btn-primary" type="button">
                    <i class="fas fa-search fa-sm"></i>
                </button>
            </div>
        </div>
    </form>
       <div className="icons">
       <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
       <i class="fas fa-bell fa-fw"></i>
       
       <span class="badge badge-danger badge-counter">3+</span>
   </a>
        <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                
                                <span class="badge badge-danger badge-counter">7</span>
                            </a>
        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
        <img class="img-profile rounded-circle" src="img/undraw_profile.svg"/>
    </a>
       </div>
 </div>
        </div>
        
        </div>
        <div className="right-content">{children}</div>
        </div>
    )
}

export default Base