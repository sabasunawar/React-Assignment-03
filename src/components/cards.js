

import React from 'react'
import './App.css'
import Crs1  from '../assets/images/course1.jpg'
import Crs2  from '../assets/images/course2.jpg'
import Crs3  from '../assets/images/course3.png'
import Crs4  from '../assets/images/course4.png'
import Crs5  from '../assets/images/course5.jpg'

const cards = () => {
function changetheme()
{

  const theme =document.getElementById("courses");
  theme.style.backgroundColor="black";
  const heading =document.getElementById("heading");
  heading.style.color="white";

  let nodes =document.getElementsByClassName("card");
  for (let i = 0; i < nodes.length; i++) {
  nodes[i].style.boxShadow = "0px 0px 7px white";
  }
  let contentnodes =document.getElementsByClassName("content");
  for (let i = 0; i < contentnodes.length; i++) {
  contentnodes[i].style.backgroundColor = "#36454F";
  contentnodes[i].style.color = "white";

  }
  let backnodes =document.getElementsByClassName("back");
  for (let i = 0; i < backnodes.length; i++) {
    backnodes[i].style.backgroundColor= "#28313b";
}
}
  return (
    <div>
      {/* <!-- ==================================== SECTION COURSES======================================================== --> */}
      <section id="courses">
            <h1 id="heading">Offered Courses</h1>
            <div className='main-container'>
                <div className='card'>
                    <div className='front'>
                        <img src={Crs1} alt="Course1"/>
                        <div className='content'>
                            <h5>Pyhthon Book</h5><br/>
                            <p>Mouse hover for details.</p>
                        </div>
                    </div>
                    <div className='back'>
                        <h5> Author: Steve McConnell</h5><br/>
                        <p> Description: <br/>
                            A Practical Handbook of Software Construction. This Complete book is considered
                            to be the encyclopedia of practical coding.</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='front'>
                        <img src={Crs2} alt="course img"/>
                        <div className='content'>
                            <h5>C Language</h5> <br/>
                            <p>Mouse hover for details.</p>
                        </div>
                    </div>
                    <div className='back'>
                        <h5> Author: Steve McConnell</h5><br/>
                        <p> Description: <br/>
                            A Practical Handbook of Software Construction. Steve McConnell's Code Complete is considered
                            to be the encyclopedia of practical coding.</p>
                    </div>
                </div>

                <div className='card'>
                    <div className='front'>
                        <img src={Crs3} alt=""/>
                        <div className='content'>
                            <h5>Php Book</h5><br/>
                            <p>Mouse hover for details.</p>
                        </div>
                    </div>
                    <div className='back'>
                        <h5> Author: Steve McConnell</h5><br/>
                        <p> Description:<br/>
                            A Practical Handbook of Software Construction. Steve McConnell's Code Complete is considered
                            to be the encyclopedia of practical coding.
                        </p>
                    </div>
                </div>

                <div className='card'>
                    <div className='front'>
                        <img src={Crs4} alt=""/>
                        <div className='content'>
                            <h5>Java Book</h5><br/>
                            <p>Mouse hover for details.</p>
                        </div>
                    </div>
                    <div className='back'>
                        <h5> Author:Steve McConnell </h5><br/>
                        <p> Description:<br/>
                            A Practical Handbook of Software Construction. Steve McConnell's Code Complete is considered
                            to be the encyclopedia of practical coding.
                        </p>
                    </div>
                </div>
                <div className='card'>
                    <div className='front'>
                        <img src={Crs5} alt=""/>
                        <div className='content'>
                            <h5>Web Design</h5><br/>
                            <p>Mouse hover for details.</p>
                        </div>
                    </div>
                    <div className='back'>
                        <h5> Author:Steve McConnell</h5><br/>
                        <p> Description:<br/>
                            A Practical Handbook of Software Construction. Steve McConnell's Code Complete is considered
                            to be the encyclopedia of practical coding.
                        </p>
                    </div>
                </div>
                <button id="directtoform" className='coursebtn' onClick={changetheme}>change Theme</button>
            </div>
        </section>
    </div>
  )
}
export default cards
