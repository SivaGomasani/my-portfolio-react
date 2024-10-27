import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from "../images/mypic.jpg";

const About = () => {
    return (
        <div className="container about-details text-start mt-5 mb-5">
            <div className="row">
            <h1 className="text-center mb-5 mt-2">About Me</h1>
                <div className="col-md-8"> 
                    <h3>Full Stack Developer</h3>
                    <p className="mt-4" style={{ maxWidth: "600px" }}>
                        I am a dedicated programmer with a passion for technology and problem-solving. Expertise in Java, I am always eager to learn and grow as a programmer. I have a good understanding of C/C++, JavaScript, Git, and MySQL Database. I am looking for new opportunities to further develop my programming skills and contribute to a team that values creativity and innovation. I am open to exploring internships and entry-level positions, where I can apply my skills and learn from experienced professionals.
                    </p>
                    <button className="btn btn-primary mt-4">Resume</button>
                </div>
                <div className="col-md-4">
                    <img src={profileImage} alt="Profile" className="img-fluid rounded-5 mt-5 shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default About;
