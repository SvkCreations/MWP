import React from 'react';
import bg from '../main-bg.png';

export default function Main() {
    return (
        <div>
            <div className="py-0 py-md-5 text-white">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-12 col-sm-12 col-lg-6">
                        <img src={bg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
                    </div>
                    <div className="col-lg-5 me-auto">
                        <h2 className="display-4 fw-bold text-white lh-1 mb-3">We design and develop <span style={{'color':'#00ffb9'}}>experiences</span> that make your lives <span style={{'color':'#00ffb9'}}>simple</span>.</h2>
                        <p className="lead">We are a team of passionate web developers and designers who believe that everyone should have the power to create beautiful, professional websites. That's the sole reason why we created Morpheous Webplanners, the most affordable and human-friendly website makers on the market. </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-0 mt-md-3">
                            <button type="button" className="btn primary-btn btn-lg px-4 me-md-2">Get started</button>
                            <button type="button" className="btn tertiary-btn btn-lg px-4">Explore Works</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
