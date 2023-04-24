import React from 'react';
import img from '../contact-bg.png'

export default function Contact() {
    return (
        <div>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-12 col-sm-12 col-lg-5 order-md-2 me-auto">
                    <img src={img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h2 className="display-4 fw-bold text-white lh-1 mb-3">Contact Us</h2>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Enter your Full name</label>
                        <input type="text" className="form-control" id="name" placeholder="eg. John Doe"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="concern" className="form-label">Elaborate your concern</label>
                        <textarea className="form-control" id="concern" rows="4"></textarea>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-0 mt-md-3">
                        <button type="submit" className="btn primary-btn btn-lg px-4 me-md-2 col-md-3">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
