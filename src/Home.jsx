import React from 'react'
import Man from './images/change.jpg'
import { FaFacebook, FaLinkedin,FaGooglePlus,FaPinterest } from "react-icons/fa";

const Home = () => {
    return (
        <div>
           
            <div className="bgimg">
                <div className="con">
                    <h2 className="heading">HASNAIN <br/> ANSARI</h2><br/>
                    <p className="para">Python Full-Stack Developer</p><br/>
                    <hr className="line"/><br/>
                    <hr className="line1"/>
                </div>

                <ul className="contacticons">
                    <li><FaFacebook /></li>
                    <li><FaLinkedin/></li>
                    <li><FaGooglePlus/></li>
                    <li><FaPinterest/></li>
                </ul>
                <img className="imgperson" src={Man} alt=""/>
            </div>

                <h1 className="what">My Top Projects</h1>
                <p>Yaha par Git ka link dalenge</p>
                
            <div className="container-fluid bg-dark cards">

                    
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src={Man} alt="Avatar" style={{width:'260px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                        <h1>Hasnain Ansari</h1>
                        <p>Software Developer</p>
                        <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src={Man} alt="Avatar" style={{width:'260px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                        <h1>Hasnain Ansari</h1>
                        <p>Software Developer</p>
                        <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src={Man} alt="Avatar" style={{width:'260px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                        <h1>Hasnain Ansari</h1>
                        <p>Software Developer</p>
                        <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src={Man} alt="Avatar" style={{width:'260px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                        <h1>Hasnain Ansari</h1>
                        <p>Software Developer</p>
                        <p>We love that guy</p>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src={Man} alt="Avatar" style={{width:'260px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                        <h1>Hasnain Ansari</h1>
                        <p>Software Developer</p>
                        <p>We love that guy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
