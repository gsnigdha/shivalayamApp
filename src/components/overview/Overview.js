import React from 'react';
import './Overview.css';


export default function Overview() {
  return<>
    <div className='container-fluid'>
      <div className='row oViewBGrnd'>
        <div className='col-md-6 font' style={{color:'white'}}>
            <h3 id='about'>About</h3>
            <h6 id='h6'>Srisailam is Maha Shiva, Srisailam is Sri Chakra.</h6>
        </div>
        <div className='col-md-6'>
          <img src='/images/img_2.png' id='idol'></img>
        </div>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
        <h3>About Overview</h3>
        <h6>Srisaila Mahakshetram is considered as Kailasa on Earth. The history and tradition have it, that the merits earned by visiting Srisailam are equal to worshipping all the divine powers of the universe.</h6>
        <p>Srisaila Mahakshetram is the living embodiment of ancient and spiritual-cultural traditions and values. Visited by many great saints like Adi Shankaracharya, rulers mainly Sri Krishna Devaraya, Chatrapathi Sivaji and several other spiritual personalities; Srisailam is the supreme repository of spiritual truth.</p>
        <div className='container'>
          <div className='row cont'>
            <div className='col-md-4 box'>
                <img src='/images/theTemple.png'id='img'></img>
                <h4 id='head'>The <br/> Temple</h4>
            </div>
            <div className='col-md-4 box'>
              <img src='/images/TempleStory.png' id='img'></img>
              <h4 id='head'>Temple<br/> Story</h4>
            </div>
            <div className='col-md-4 box'>
              <img src='/images/GenInfo.png' id='img'></img>
              <h4 id='head'>General<br/> Information</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
