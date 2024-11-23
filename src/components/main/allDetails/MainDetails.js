import React from 'react';
import './MainDetails.css'

export default function MainDetails() {
  return <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-3 hundi'>
                <img src={'/images/ehundi.png'} id='allicons'></img>
                <h5 style={{color:'#131390',textAlign:'center'}}>e-Hundi</h5>
                <p style={{ fontSize:'15px',color: '#181818',lineHeight: '19px',textAlign: "center"}}>e-Hundi allows donations from people across the globe for the welfare of the sacred Srisailam. Devotees can offer their donations via internet banking.</p>
                <h6 style={{color:'#131390',textAlign:'center'}}>More Info ></h6>
                <button id='btn1'>Donate Now ></button>

            </div>
            <div className='col-md-3 pseva'>
                <img src={'/images/pseva.png'} id='allicons'></img>
                <h5 style={{color:'#131390',textAlign:'center'}}>Paroksha Seva</h5>
                <p style={{ fontSize:'15px',color: '#181818',lineHeight: '19px',textAlign: "center"}}>In a world, that's filled with the essence of Shiva, one can now wholeheartedly worship Sri Mallikarjuna Swamy and Bhramarambika Devi from anywhere in the world.</p>
                <h6 style={{color:'#131390',textAlign:'center'}}>More Info ></h6>
                <button id='btn2'>Book Now > </button>

            </div>
            <div className='col-md-3 aprasadam'>
                <img src={'/images/aprasadam.png'} id='allicons'></img>
                <h5 style={{textAlign:'center'}}>AnnaPrasadam</h5>
                <p style={{ fontSize:'15px',color: 'white',lineHeight: '19px',textAlign: "center"}}>Offering one Annadhanam is equals to donating 1000 elephants, a crore cows, gold and land that extends until seashore; fulfilling all duties of a family.</p>
                <h6 style={{textAlign:'center'}}>More Info ></h6>
                <button id='btn3'>Donate Now > </button>

            </div>
            <div className='col-md-3 accomod '>
                <img src={'/images/accomod.png'} id='allicons'></img>
                <h5 style={{textAlign:'center'}} >Accomodation</h5>
                <p style={{ fontSize:'15px',color: 'white',lineHeight: '19px',textAlign: "center", }}>Offering one Annadhanam is equals to donating 1000 elephants, a crore cows, gold and land that extends until seashore; fulfilling all duties of a family.</p>
                <h6 style={{textAlign:'center'}}>More Info ></h6>
                <button id='btn4'>Donate Now > </button>

            </div>
        </div>
    </div>
    <br/>
    <br/>
    <div className='container-fluid'>
        <div className='row srisailaTv'>
            <div className='col-md-5 info'>
                <img src={'/images/sriIcon.png'} id='sricon'></img>
                <h3 style={{position:'relative',left:'80px',bottom:'50px'}}>Srisaila Tv</h3>
                <div id='webcast'>Srisaila TV is a 24 x 7 Webcast devotional channel in Telugu which caters to the people of Hindu religion. It was launched on March,2017. It is from Srisaila Devasthanam Product.</div>
                <div style={{fontSize:'16px',paddingBottom: '20px'}}>It's south India's first, Lord Shiva's devotional channel on Telugu. The channel telecasts fiction and non-fiction programs.</div>
                <button id='btn1'>Watch Now ></button>
            </div>
            <div className='col-md-6 video'>
                <iframe width="650" height="315" src="https://www.youtube.com/embed/bgyVTq7Xa64?si=sMBs51knTkEgu-H7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <br/>
    <br/>
    <div className='container'>
        <div className='row nandi'>
            <div className='col-md-6'>
                <div id='abtSri'>
                    <h4 id='abt'>About</h4>
                    <h2 id='abtSrisai'>Srisailam</h2>
                    <p id='abtdesc'>Srisaila Mahakshetram is considered as Kailasa on Earth. The history and tradition have it that the merits earned by visiting Srisailam are equal to worshipping all the divine powers the universe holds.</p><br/>
                    <p>Srisaila Mahakshetram is the living embodiment of ancient and spiritual-cultural traditions and values. Visited by all great saints and rulers namely, Sri Rama, Adi Shankaracharya and several other spiritual personalities; Srisailam is the supreme repository of spiritual truth.</p>
                    <button id='btn5'>Read  More ></button>
                </div>
                
            </div>
            <div className='col-md-6'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 pratSeva'>
                            <img src={'/images/psevaLogo.png'} id='psevaLogo'></img>
                            <h5 style={{textAlign:'center',color:'white',padding:'10px'}} >Pratyaksha Seva</h5>
                            <button id='btn6'>View ></button>
 
                        </div>
                        <div className='col-md-6 kumkum'>

                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 simhaDwara'>
                            
                        </div>
                        <div className='col-md-6 mOffer'>
                            <img src={'/images/mainOfferingLogo.png'} id='mOfferlogo'></img>
                            <h5 style={{textAlign:'center',color:'white',padding:'10px'}} >Main Offerings</h5>
                            <button id='btn7'>View ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
    
  </>
}
