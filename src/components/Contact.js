import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
    return (
        <div className="container contact-details mb-5">
            <h1 className="text-center mb-4">Contact Me</h1>
            <div className="container border p-3" style={{maxWidth:"600px", marginLeft:"0"}}>
                <form>
                    <div className="mb-3 text-start">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" className="form-control" placeholder="Enter your Name..." />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label ">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Enter your Email..." />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea id="message" className="form-control" rows="4" placeholder="Enter your Message..."></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
