import React from "react";
import "./Navbar.css";
import { Link, Route, Routes } from "react-router-dom";
import Overview from "../overview/Overview";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid box-1">
        <span className="navbar-brand mb-0 h1 cont1">
          <div className="row">
            <div className="col-md-7">
              Wednesday, 06 February 2024- 11:26 PM IST
              <i class="bi bi-facebook icon"></i>
              <i class="bi bi-twitter icon"></i>
              <i class="bi bi-instagram icon"></i>
              <i class="bi bi-youtube icon"></i>
            </div>
            <div className="col-md-1">SRISAILA TV</div>
            <div className="col-md-1">ENGLISH</div>
            <div className="col-md-1">PRINT A TICKET</div>
            <div className="col-md-1">Sign In/Sign Up</div>
          </div>
        </span>
      </div>
      <div className="container-fluid box-2">
        <div className="row">
          <div className="col-md-1">
            <img src="https://www.srisailadevasthanam.org/static/media/Logo-circle.8bc79b53.png" id="logo"/> 
          </div>
          <div className="col-md-2">
            <div id="title">
              Sri Bhramaramba Mallikarjuna Swamy Varla Devasthanam
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12">
                <div className="container seva">
                  <div className="row">
                    <div className="col-md-7"></div>
                    <div className="col-md-1 me-3 volu">Volunteer</div>
                    <div className="col-md-1  shop">Shop</div>
                    <div className="col-md-1 ">
                      <i class="bi bi-cart cart"></i>
                    </div>
                    <div className="col-md-1">
                      <i class="bi bi-search cart"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col-md-12">
                <div className="container details">
                  <div className="row toggleBar">
                    <div className="col-md-1 about">
                      <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          About
                        </a>
                        <ul class="dropdown-menu">
                          <li className="dropdown-item"> <Link to='/overview' > Overview</Link></li>
                          {/* <li><a className="dropdown-item" href="#">Overview</a></li> */}
                          <li><a className="dropdown-item" href="#">The Temple</a></li>
                          <li><a className="dropdown-item" href="#">The Temple Story</a></li>
                          <li><a className="dropdown-item" href="#">General Information</a></li>
                        </ul>
                        
                      </div>
                    </div>
                    <div className="col-md-3 about">
                      <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Sevas & Darshanam
                        </a>
                        <ul class="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Overview</a></li>
                          <li><a className="dropdown-item" href="#">Darshanam</a></li>
                          <li><a className="dropdown-item" href="#">Pratyaksha Seva</a></li>
                          <li><a className="dropdown-item" href="#">Proksha Seva</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-2 about">
                      <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Donations
                        </a>
                        <ul class="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Overview</a></li>
                          <li><a className="dropdown-item" href="#">e-Hundi</a></li>
                          <li><a className="dropdown-item" href="#">Gold Thapadam For Swamy vari <br/> temple Dwajasthambam</a></li>
                          <li><a className="dropdown-item" href="#">One Day Gowsamrakshana Nidhi</a></li>
                          <li><a className="dropdown-item" href="#">SBMS Agama Patashala Trust </a></li>
                          <li><a className="dropdown-item" href="#">SBMS Gowsamrakshana Trust</a></li>
                          <li><a className="dropdown-item" href="#">SBMS One Day Annaprasadam</a></li>
                          <li><a className="dropdown-item" href="#">SBMS Pranadana Trust</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-2 about">
                      <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Online Booking
                        </a>
                        <ul class="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Overview</a></li>
                          <li><a className="dropdown-item" href="#">Pratyaksha Seva Booking </a></li>
                          <li><a className="dropdown-item" href="#">Paroksha Seva Booking </a></li>
                          <li><a className="dropdown-item" href="#">Darshanam Tickets</a></li>
                          <li><a className="dropdown-item" href="#">Donations</a></li>
                          <li><a className="dropdown-item" href="#">Accomodation</a></li>
                          <li><a className="dropdown-item" href="#">Publications</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-2 about">
                      <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Media Room
                        </a>
                        <ul class="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Overview</a></li>
                          <li><a className="dropdown-item" href="#">Media Kit</a></li>
                          <li><a className="dropdown-item" href="#">Gallery</a></li>
                          <li><a className="dropdown-item" href="#">Whats New</a></li>
                          <li><a className="dropdown-item" href="#">Press</a></li>
                          <li><a className="dropdown-item" href="#">Tenders</a></li>
                          <li><a className="dropdown-item" href="#">RTI Act</a></li>
                        </ul>
                      </div>
                    </div>  
                    <div className="col-md-2 about">
                      <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Support
                        </a>
                        <ul class="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Overview</a></li>
                          <li><a className="dropdown-item" href="#">FAQs</a></li>
                          <li><a className="dropdown-item" href="#">Facilities to Pilgrims</a></li>
                          <li><a className="dropdown-item" href="#">Connectivity</a></li>
                          <li><a className="dropdown-item" href="#">Contact Us</a></li>
                        </ul>
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/overview" element={<Overview/>}></Route>
      </Routes>
    </>
  );
}
