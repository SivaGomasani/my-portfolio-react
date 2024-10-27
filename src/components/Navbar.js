import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-rg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">MyPortfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#certificate">Certificates</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };
