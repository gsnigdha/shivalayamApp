import React from 'react';
import './PhotoGallery.css'

export default function PhotoGallery() {
  return <>
    <h2 id='pgal'>Photo Gallery</h2>
    <h5 id='beauty'>The Beauty of Sacred Srisailam</h5>
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
    
  </> 
  
}
