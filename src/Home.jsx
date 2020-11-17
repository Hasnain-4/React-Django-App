import React from 'react'
import Man from './images/change.jpg'
import Explore from './images/explore.jpg'
import { FaFacebook, FaLinkedin,FaGooglePlus,FaPinterest,FaExternalLinkAlt } from "react-icons/fa";

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

            <div className="container-fluid text-center examtext">
                <div className="">
                    <h4 className="examheading">The Modern E-Exam</h4>
                    <hr className="examhr"/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aut aliquid amet autem inventore hic voluptate, deserunt velit corrupti eius molestiae incidunt soluta consectetur voluptatibus ratione deleniti ipsum laudantium modi.</p>
                    <hr className="examhr1"/>
                <img className="examimg" src={Explore} alt=""/>
                </div>
                
                <a href="http://hasnainans.pythonanywhere.com" target="_blank">
                <button className="visitexam">Visit Site <FaExternalLinkAlt/></button>
                </a>
            </div>

            <h4 className="what">More From Github</h4>
            <div className="container-fluid bg-dark cards">

                    
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src={Man} alt="Avatar" style={{width:'260px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                        <h1>Blog Todo Shop</h1>
                        <p>Python / Django Project</p>
                        <a href="https://github.com/Hasnain-4/Blog-Todo-Shop" target="_blank">
                        <button className="visitexam">Visit <FaExternalLinkAlt/></button>
                        </a>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src={Man} alt="Avatar" style={{width:'260px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                        <h1>Travel Website</h1>
                        <p>Python / Django </p>
                        <a href="https://github.com/Hasnain-4/DjangoTravel" target="_blank">
                        <button className="visitexam">Visit <FaExternalLinkAlt/></button>
                        </a>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src={Man} alt="Avatar" style={{width:'260px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                        <h1>Facebook Like Post</h1>
                        <p>Python / Django</p>
                        <a href="https://github.com/Hasnain-4/FbPost" target="_blank">
                        <button className="visitexam">Visit <FaExternalLinkAlt/></button>
                        </a>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src={Man} alt="Avatar" style={{width:'260px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                        <h1>Stydy 99</h1>
                        <p>Android Application</p>
                        <a href="https://github.com/Hasnain-4/study99" target="_blank">
                        <button className="visitexam">Visit <FaExternalLinkAlt/></button>
                        </a>
                        </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src={Man} alt="Avatar" style={{width:'260px',height:'300px'}}/>
                        </div>
                        <div class="flip-card-back">
                        <h1>Full-Stack Type</h1>
                        <p>React-Django-Application</p>
                        <a href="https://github.com/Hasnain-4/React-Django-App" target="_blank">
                        <button className="visitexam">Visit <FaExternalLinkAlt/></button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
