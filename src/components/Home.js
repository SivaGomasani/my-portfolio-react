import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../images/myprofile.jpg";
import './styles.css'

const Home = () => {
    return (
        <div className="container details text-start mt-3">
            <div className="row">
                <div className="col-md-8 order-md-1 order-2">
                    <ul className="list-inline social-links mt-5 mb-5">
                        <li className="list-inline-item me-4"><a href="#insta" className="btn anchor-custom">Instagram</a></li>
                        <li className="list-inline-item me-4"><a href="#github" className="btn anchor-custom">Github</a></li>
                        <li className="list-inline-item me-4"><a href="#linkedin" className="btn anchor-custom">LinkedIn</a></li>
                        <li className="list-inline-item me-4"><a href="#google" className="btn anchor-custom">Google</a></li>
                    </ul>
                    <h1>GOMASANI SIVA NAGARAJU</h1>
                    <h3 className="mt-3">Full Stack Developer</h3>
                    <p className="mt-4 mb-5" style={{ maxWidth: "600px" }}>
                        Welcome to My Portfolio! I am thrilled to have you here and share my journey, skills, and accomplishments. Within this portfolio, you will find a carefully curated collection of my best work, projects, and certifications. My goal is to not only showcase my skills but also inspire and captivate those who view my portfolio.
                    </p>
                    <button className="btn btn-primary hire">Hire Me</button>
                </div>
                <div className="col-md-4 d-flex justify-content-md-end justify-content-center order-md-2 order-1 mt-5">
                    <img src={profileImage} alt="Profile" className="img-fluid rounded-5" width={"300px"} height={"300px"}/>
                </div>
            </div>
        </div>
    );
};

export default Home;
