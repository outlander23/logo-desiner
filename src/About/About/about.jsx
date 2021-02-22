import React, {Component} from "react";
import {Fade, Zoom} from "react-awesome-reveal";
import http from "../../form/httpService";
import {apiRoot} from "../../constants";

class About extends Component {
    state = {
        aboutMe: []
    }

    async componentDidMount() {
        let res = await http.get(apiRoot + '/site-data/about_me/');
        this.setState({aboutMe: res.data.data});
    }

    render() {
        const {name, email, phone, experience, designation, certification, myPic} = this.state.aboutMe;
        return (
            <section className="site-section  height home-section " id="about">
                <br/> <br/> <br/> <br/>
                <div className="mt-4 mb-4 container-fluid container">
                    <div className="text-center">
                        <h2>
                            About <strong>Me</strong>
                        </h2>
                        <div className="statistics-icon  statistics-content">
                            <i className=" icon-profile-male "/>
                        </div>
                    </div>

                    <div className="row mb-5 align-items-center container-fluid">
                        <div className="col-lg-7 pr-lg-5 mb-5  col-md-4 mb-lg-0 mt-4">
                            <Zoom>
                                <img src={myPic} width="450" height="400" alt={name} className="img-fluid"/>
                            </Zoom>
                        </div>

                        <div className="col-lg-5 pl-lg-5 col-md-8 ">
                            <Fade>
                                <table className="table table-responsive ">
                                    <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td className="bg-color-2 color-white">{name}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td className="bg-color-2 color-white">
                                            {email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Designation</td>
                                        <td className="bg-color-2 color-white">
                                            {designation}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Experience</td>
                                        <td className="bg-color-2 color-white">{experience}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact</td>
                                        <td className="bg-color-2 color-white">{phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Certification</td>
                                        <td className="bg-color-20 color-white">
                                            {certification}
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Fade>
                        </div>
                        <p>
                            <button href="#section-contact" className="btn-hire" id="hire">
                                Hire Me
                            </button>
                        </p>
                    </div>
                </div>
                <br/> <br/>
            </section>
        );
    }
}

export default About;
