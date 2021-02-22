import React, {Component} from "react";
import {Fade} from "react-awesome-reveal";
import http from "../../form/httpService";
import {apiRoot} from "../../constants";

class MyResume extends Component {
  state = {
    educations: [],
    experiences: []
  }

  async componentDidMount() {
    let res = await http.get(apiRoot + '/site-data/education/');
    this.setState({educations: res.data.data});
    res = await http.get(apiRoot + '/site-data/experience/');
    this.setState({experiences: res.data.data});
  }

  render() {
    const {educations, experiences} = this.state;
    return (
        <section className="container" id="resume">
          <div className="row ">
            <div className="col-lg-6">
              <div className="experience">
                <h2 className="m-5 pink">Education</h2>

                {educations.map(education =>
                    <div className="experience-container ">
                      <div className="experience-circle bg-color-1">
                        <i className={education.icon}/>
                        <p>{education.year}</p>
                      </div>
                      <Fade delay={300}>
                        <div className="experience-content experience-color-2 ">
                      <span className="date">
                        <span className="date icon-calendar"/>
                        {education.duration}
                      </span>
                          <h3>{education.title}</h3>
                          <p>{education.about}</p>
                          <span className="school">{education.institution}</span>
                        </div>
                      </Fade>
                    </div>
                )}


              </div>
            </div>
            <div className="col-lg-6">
              <div className="experience">
                <h2 className="m-5 color-10">Experience</h2>

                {experiences.map(experience =>
                    <div className="experience-container ">
                      <div className="experience-circle bg-color-5">
                        <i className={experience.icon}/>
                        <p>{experience.year}</p>
                      </div>
                      <Fade delay={300}>
                        <div className="experience-content  ">
                    <span className="date">
                      <span className="icon-calendar"/>
                      {experience.duration}
                    </span>
                          <h3>{experience.title}</h3>
                          <p>{experience.about}</p>
                          <span className="school">{experience.organization}</span>
                        </div>
                      </Fade>
                    </div>
                )}

              </div>
            </div>
          </div>
          <br/> <br/>
        </section>
    );
  }
}

export default MyResume;
