import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Skills = () => {
    return (
        <div className="container skills">
            <h1>About My Skills</h1>
            <div className="row skill-container">
                <div className="col-md-6 ms-0 border p-3 m-4">
                    <h2 className="mb-4 text-center">Technical Skills</h2>
                    <div className="skill-1 p-3 text-start">
                        <h4>Java</h4><span className="badge bg-success text-end d-block">90%</span>
                        <h4>SQL</h4><span className="badge bg-info text-end d-block">80%</span>
                        <h4>HTML</h4><span className="badge bg-warning text-end d-block">90%</span>
                        <h4>CSS</h4><span className="badge bg-primary text-end d-block">90%</span>
                        <h4>JavaScript</h4><span className="badge bg-danger text-end d-block">80%</span>
                    </div>
                </div>
                <div className="col-md-5 border p-3 mt-4">
                    <h2 className="mb-4">Soft Skills</h2>
                    <div className="skill-1 text-start pt-3">
                        <h4>Good Communication</h4><span className="badge bg-success text-end d-block">90%</span>
                        <h4>Problem Solving</h4><span className="badge bg-info text-end d-block">90%</span>
                        <h4>Interpersonal Skills</h4><span className="badge bg-warning text-end d-block">90%</span>
                        <h4>Leadership Qualities</h4><span className="badge bg-primary text-end d-block">90%</span>
                        <h4>Work Ethic</h4><span className="badge bg-danger text-end d-block">90%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
