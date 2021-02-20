import React, { Component } from "react";
import { Slide, Fade, Zoom } from "react-awesome-reveal";

class Myresume extends Component {
  render() {
    return (
      <section className="container" id="resume">
        <div className="row ">
          <div className="col-lg-6">
            <div className="experience">
              <h2 className="m-5 pink">Education</h2>

              <div className="experience-container ">
                <div className="experience-circle bg-color-1">
                  <i className="icon-book-open"></i>
                  <p>2019</p>
                </div>
                <Fade delay={500}>
                  <div className="experience-content experience-color-2 ">
                    <span className="date">
                      <span className="icon-calendar"></span>January 2020 -
                      Present - Present
                    </span>
                    <h3>Masteral in IT</h3>
                    <p>
                      Still now I am learning new things and It's my pleasure.
                    </p>
                    <span className="school">Dhaka University</span>
                  </div>
                </Fade>
              </div>

              <div className="experience-container  ">
                <div className="experience-circle bg-color-2">
                  <i className=" icon-graduation-cap"></i>
                  <p>2016</p>
                </div>
                <Fade delay={600}>
                  <div className="experience-content experience-color-2 ">
                    <span className="date">
                      <span className="icon-calendar"></span> January 2017 -
                      2020 Deacember.
                    </span>
                    <h3>Bsc in CSE</h3>
                    <p>
                      At first I am proud to be a part of CSE family in BRUR. I
                      just wants to learn about computer sciences.
                    </p>
                    <span className="school">
                      Begum Rokeya University, Rangpur
                    </span>
                  </div>
                </Fade>
              </div>

              <div className="experience-container ">
                <div className="experience-circle bg-color-4 ">
                  <i className="icon-graduation-cap"></i>
                  <p>2015</p>
                </div>
                <Fade delay={500}>
                  <div className="experience-content experience-color-2 ">
                    <span className="date">
                      <span className="icon-calendar"></span>January 2015 - 2016
                      Deacember.
                    </span>
                    <h3>HSC in Science</h3>
                    <p>My journy started from here.</p>
                    <span className="school">
                      Collectorate School & College, Rangpur
                    </span>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="experience">
              <h2 className="m-5 color-10">Experience</h2>

              <div className="experience-container ">
                <div className="experience-circle bg-color-5">
                  <i className="icon-browser"></i>
                  <p>2019</p>
                </div>
                <Fade delay={800}>
                  <div className="experience-content  ">
                    <span className="date">
                      <span className="icon-calendar"></span> March 2020 -
                      Present
                    </span>
                    <h3>Web Developer</h3>
                    <p>
                      I started My career as a Full Stack Web Developer . I have
                      created and Maintained some websites.
                    </p>
                    <span className="school">NewBees</span>
                  </div>
                </Fade>
              </div>

              <div className="experience-container ">
                <div className="experience-circle bg-color-6">
                  <i className="icon-pen"></i>
                  <p>2020</p>
                </div>
                <Fade delay={700}>
                  <div className="experience-content ">
                    <span className="date">
                      <span className="icon-calendar"></span> March 2020 -
                      Present
                    </span>

                    <h3>Question Writer</h3>
                    <p>
                      For Online contest I write questions for B12-An online
                      Judge.
                    </p>
                    <span className="school">B12</span>
                  </div>
                </Fade>
              </div>

              <div className="experience-container ">
                <div className="experience-circle bg-color-3">
                  <i className="icon-ribbon"></i>
                  <p>2020</p>
                </div>
                <Fade delay={500}>
                  <div className="experience-content  ">
                    <span className="date">
                      <span className="icon-calendar"></span> March 2020 -
                      Present
                    </span>

                    <h3>Green Coder</h3>
                    <p>I am proud to be an Green Coder at codeforces .</p>
                    <span className="school">Codeforces</span>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <br /> <br />
      </section>
    );
  }
}

export default Myresume;
