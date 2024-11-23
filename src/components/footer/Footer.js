
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import React from "react";
import "./Footer.css";
import { Link, Route, Routes } from "react-router-dom";
import PhotoGallery from "../photoGallery/PhotoGallery";
// import eslint-disable react/jsx-no-undef
// import eslint-disable React/jsx-no-comment-textnodes 


export default function Footer() {
  return (
    <>
      <h2 id='pgal'>Photo Gallery</h2>
    <h5 id='beauty'>The Beauty of Sacred Srisailam</h5>

    {/* <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box> */}


    <div className='container'>
        <div className='row'>
            <div className='col-md-3 '>
                <img src='/images/goldenGopuram.png'id='gallery'></img>
            </div>
            <div className='col-md-3 '>
                <img src='/images/nandi2.png'id='gallery'></img>

            </div>
            <div className='col-md-3 '>
                <img src='/images/gopuramNandi.png'id='gallery'></img>

            </div>
            <div className='col-md-3 '>
                <img src='/images/gopuram.png'id='gallery'></img>

            </div>
        </div>
    </div>
    <br/>
    <div className='container'>
        <div className='row'>
            <div className='col-md-3 '>
            <img src='/images/krishnaRiver.png'id='gallery'></img>

            </div>
            <div className='col-md-3 '>
            <img src='/images/Goddess.png'id='gallery'></img>

            </div>
            <div className='col-md-3 '>
            <img src='/images/god.png'id='gallery'></img>
 
            </div>
            <div className='col-md-3 '>
            <img src='/images/godpair.png'id='gallery'></img>

            </div>
        </div>
    </div>
    <div style={{padding:'20px'}}>
        <button id='btn8'> <Link to="/photoGal">View All ></Link></button>
    </div>
    
      <div className="container-fluid">
        <div className="row bluefoot ">
          <div className="col-md-6" id="download">
            Download Mobile App
            <br/>
            <span>
              <img src={'/images/gPlay.png'} id="gplay"/>
              <img src={'/images/downloadApp.png'} id="gplay"/>

            </span>
          </div>
          <div className="col-md-6">
            <form>
              <div id="snews">Subscribe Newsletter</div>
              <div className="d-flex w-100 gap-2">
                <img src={"/images/msg.png"} id="msg"></img>
                <label for="newsletter1" className="visually-hidden" id="mail">
                </label>
                <img src={"/images/sendIcon.png"} id="sicon"></img>

                <input id="newsletter1" type="text" className="form-control" placeholder="Enter Email address" />
                
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row box3 info">
          <div className="col-md-2">
            <div>
              <strong id="strong">About</strong>
            </div>
            <div id="hover">Overview</div>
            <div id="hover">The Temple</div>
            <div id="hover">The Temple Story</div>
            <div id="hover">General Information </div>
          </div>
          <div className="col-md-2">
            <div>
              <strong id="strong">Sevas & Darshanam</strong>
            </div>
            <div id="hover">Overview</div>
            <div id="hover">Darshanam</div>
            <div id="hover">Paroksha Seva</div>
            <div id="hover">Pratyaksha Seva</div>
          </div>
          <div className="col-md-2">
            <div>
              <strong id="strong">Donations</strong>
            </div>
            <div id="hover">Overview</div>
            <div id="hover">e-Hundi</div>
            <div id="hover">AnnaPrasadam Trust</div>
            <div id="hover">Agama Patasala Trust</div>
            <div id="hover">GoSamrakshana Trust</div>
            <div id="hover">Pranadana Trust</div>
            <div id="hover">Srisaila TV</div>
            <div id="hover">Swachh Srisailam</div>
          </div>
          <div className="col-md-2 ">
            <div>
              <strong id="strong">Online Booking</strong>
            </div>
            <div id="hover">Overview</div>
            <div id="hover">Pratyaksha Seva Booking</div>
            <div id="hover">Paroksha Seva Booking</div>
            <div id="hover">Darshanam Tickets</div>
            <div id="hover">Donations</div>
            <div id="hover">Accomodation</div>
            <div id="hover">Publications</div>
          </div>
          <div className="col-md-2 ">
            <div>
              <strong id="strong">Media Room</strong>
            </div>
            <div id="hover">Overview</div>
            <div id="hover">Media Kit</div>
            <div id="hover">Gallery</div>
            <div id="hover">Whats New</div>
            <div id="hover">Press</div>
            <div id="hover">Tenders</div>
            <div id="hover">RTI Act</div>
          </div>
          <div className="col-md-2">
            <div>
              <strong id="strong">Support</strong>
            </div>
            <div id="hover">Overview</div>
            <div id="hover">FAQs</div>
            <div id="hover">Facilities to Piligrims</div>
            <div id="hover">Connectivity</div>
            <div id="hover">Contact Us</div>
          </div>
        </div>

        <hr />

        <div className="Container-fluid">
          <div className="row website">
            <div className="col-md-4 me-4">
              <i class="bi bi-geo-alt-fill"></i> &ensp;
              Srisaila Devasthanam,
              <br />
              &emsp;&emsp;Srisailam - 518101, Kurnool (Dist.), Andhra Pradesh, India.
            </div>
            <div className="col-md-3 me-4">
              <div> <i class="bi bi-envelope-fill"></i> &emsp; endow-eosri@gov.in</div>
              <div> <i class="bi bi-browser-chrome"></i> &emsp; www.srisailadevasthanam.org</div>
            </div>
            <div className="col-md-3">
              <div> <i class="bi bi-telephone-fill"></i> &emsp; +91-8333901351 /2 /3 /4 /5 /6</div>
              <div> <i class="bi bi-phone-flip"></i> &emsp; +91-8524-287126</div>
            </div>
          </div>
        </div>

        <hr />
        <div id="footerimg"> </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 " id="socialMedia" >
            <i class="bi bi-facebook" id="social"></i>
            <i class="bi bi-twitter" id="social"></i>
            <i class="bi bi-instagram" id="social"></i>
            <i class="bi bi-youtube" id="social"></i>
          </div>
          <div className="col-md-2">
            
          </div>
          <div className="col-md-4" style={{fontSize:'small'}}>
            <span id="sriDevas">@2024 Srisaila Devasthanam</span>
            {/* <span id="ppolicy">Privacy Policy</span>
            <span>Terms and Conditions</span> */}
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-2" style={{fontWeight:'200',fontStyle:'italic',paddingLeft:'40px'}}>
            Developed By <b>P.Durga Prasad</b> 
          </div>
          <div className="col-md-1">
            
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/photoGal" element={<PhotoGallery/>}></Route>
      </Routes>
    </>
  );
}
