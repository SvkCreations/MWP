import React from 'react';
import bg from '../main-bg.png';

export default function Main() {
    return (
        <div>
            <div className="px-0 mx-4 px-md-5 mx-md-5 py-0 py-md-5 text-white">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-12 col-sm-12 col-lg-6">
                        <img src={bg} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
                    </div>
                    <div className="col-lg-5 me-auto">
                        <h2 className="display-4 fw-bold text-white lh-1 mb-3">We design and develop experiences that make your lives simple.</h2>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn primary-btn btn-lg px-4 me-md-2">Get started</button>
                            <button type="button" className="btn secondary-btn btn-lg px-4">Explore Works</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
