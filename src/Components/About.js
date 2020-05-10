import React,{Fragment} from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (

    <Fragment>
        <a href={"/shobhit_tiwari"}><button className='gitbutton'>GoBack</button></a>


        <section id="timeline" className={"cont"}>
            <article>
                <div className="inner">
      <span className="date">
        <span className="day">7<sup>th</sup></span>
        <span className="month">May</span>
        <span className="year">2020</span>
      </span>
                    <h2>OPEN SOURCE </h2>
                    <p>Started Contributing in open source projects.Made by first contribution in Microsoft Azure.Also
                    working on projects like Mocha and Rocket.Chat</p>
                </div>
            </article>
            <article>
                <div className="inner">
      <span className="date">
        <span className="day">20<sup>th</sup></span>
        <span className="month">Mar</span>
        <span className="year">2020</span>
      </span>
                    <h2>DEV. CONNECT</h2>
                    <p>Developing an online platform using MERN stack to connect developers where they can demonstrate their skills,share ideas as well as help each other. The state management of the front end is performed using Redux Store. The project is 80% completed.</p>
                </div>
            </article>
            <article>
                <div className="inner">
      <span className="date">
        <span className="day">3<sup>rd</sup></span>
        <span className="month">Mar</span>
        <span className="year">2020</span>
      </span>
                    <h2>SIH FINALIST</h2>
                    <p>A total of 20 teams participated in this Hackathon out of which only 5 got selected for
                    the final round.I will be working as a back end developer in the finale.</p>
                </div>
            </article>
            <article>
                <div className="inner">
      <span className="date">
        <span className="day">26<sup>th</sup></span>
        <span className="month">DEC</span>
        <span className="year">2019</span>
      </span>
                    <h2>WINTER INTERN AT SIFY</h2>
                    <p>Built a small web application for the company that tracks the status of the ongoing tasks.Tech stack used was React and Django.The product was then uploaded on the Sify Cloud Network.</p>
                </div>
            </article>
            <article>
                <div className="inner">
      <span className="date">
        <span className="day">18th<sup>th</sup></span>
        <span className="month">DEC</span>
        <span className="year">2019</span>
      </span>
                    <h2>GOT SELECTED AS A SOFTWARE INTERN AT VIASAT TELECOMM.</h2>
                    <p>A total of 106 students sat for the internship round out of which only 4 got selected.
                    The internship has been postponed from May to January because of the pandemic</p>
                </div>





            </article>

            <article>
                <div className="inner">
      <span className="date">
        <span className="day">9<sup>th</sup></span>
        <span className="month">DEC</span>
        <span className="year">2019</span>
      </span>
                    <h2>TECHNICAL WRITER AT MEDIUM</h2>
                    <p>Write blogs to influence, teach and aware of new technological frameworks, technologies and their unique yet exciting applications.Till now I have written articles related to Node,React,Web Scraping and hosting web apps on local servers.
                    </p>
                </div>
            </article>


            <article>
                <div className="inner">
      <span className="date">
        <span className="day">18<sup>th</sup></span>
        <span className="month">Nov</span>
        <span className="year">2019</span>
      </span>
                    <h2>DELL HACKATHON 2019</h2>
                    <p>Created a product recommendation system using Least Square Regression and Clustering.I did not
                    win the hackathon but this was the first time that I created a web app using node and express</p>
                </div>
            </article>



            <article>
                <div className="inner">
      <span className="date">
        <span className="day">4<sup>th</sup></span>
        <span className="month">June</span>
        <span className="year">2019</span>
      </span>
                    <h2>STUDENT AT CODING BLOCKS </h2>
                    <p>Learned about the fundamentals of full stack web development. Mainly focused on back end development and databases. During the training created a Movies app and a Snakes game in Javascript.

                        </p>
                </div>
            </article>


            <article>
            <div className="inner">
      <span className="date">
        <span className="day">12<sup>th</sup></span>
        <span className="month">May</span>
        <span className="year">2019</span>
      </span>
                <h2>MY FIRST PROJECT </h2>
                <p>
                    Famous Nokia Snakes Game created using HTML,CSS and JavaScript. The functionalities include-<br></br>
                    1) Snake can move in all four directions<br></br>
                    2) The length of the snake increases as soon as it eats the food<br></br>
                    3) Scoreboard to track the score
                </p>
            </div>
        </article>




            <article>
                <div className="inner">
      <span className="date">
        <span className="day">21<sup>st</sup></span>
        <span className="month">DEC</span>
        <span className="year">2018</span>
      </span>
                    <h2>STUDENT AT CODING BLOCKS</h2>
                    <p>
                        Learnt about Data Structures and Algorithms in Java. This was my first experience with Programming.
                    </p>
                </div>
            </article>
        </section>
    </Fragment>
    )
};



export default About;
