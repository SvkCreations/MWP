import React from 'react';
import img from '../whyus-bg.png';

export default function WhyChooseUs() {
    return (
        <div>
            <div className="text-white my-3 my-md-5 py-md-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-12 col-sm-12 col-lg-6">
                        <img data-aos="fade-up" src={img} className="d-block mx-lg-auto img-fluid" width={650} alt="Bootstrap Themes" loading="lazy" />
                    </div>
                    <div className="col-lg-6 me-auto">
                        <h2 className="display-4 fw-bold text-white lh-1 mb-5" data-aos="fade-up">Why Choose Us?</h2>
                        {/* <p>We understand that choosing the right company to partner with is an important decision. That's why we strive to provide the best possible service and products to our customers. Here are just a few of the reasons why you should choose us: </p> */}
                        <h4 className="fw-bold text-prm d-flex align-items-center gap-2"><span style={{fontSize:'32px'}} className="material-symbols-outlined" data-aos="fade-up">
                            done
                        </span>Quality Products </h4>
                        <p>We take pride in the quality of our digital products. All of our products are designed and developed using the latest technology. So our products are fast, secure, human-friendly and easy to use.</p>
                        <hr></hr>
                        <h4 className="fw-bold text-prm d-flex align-items-center gap-2"><span style={{fontSize:'32px'}} className="material-symbols-outlined" data-aos="fade-up">
                            done
                        </span>Exceptional Service </h4>
                        <p>Our team of experts is dedicated to providing exceptional customer service. We are always available to answer any questions or concerns you may have. We strive to make sure that all of our customers are completely satisfied with their purchase. </p>
                        <hr></hr>
                        <h4 className="fw-bold text-prm d-flex align-items-center gap-2"><span style={{fontSize:'32px'}} className="material-symbols-outlined" data-aos="fade-up">
                            done
                        </span>Competitive Prices</h4>
                        <p>We offer competitive prices on all of our products. We are constantly monitoring the market to make sure that our prices remain competitive. </p>
                        <hr></hr>
                        <h4 className="fw-bold text-prm d-flex align-items-center gap-2"><span style={{fontSize:'32px'}} className="material-symbols-outlined" data-aos="fade-up">
                            done
                        </span>Fast Delivery</h4>
                        <p>We understand that time is of the essence. That's why we offer fast delivery on all of our products. We will make sure that your website is up and running within the blink of an eye.</p>
                        <hr></hr>

                        <p>We are confident that you will be satisfied with our products and services. Contact us today to learn more about why you should choose us. </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-0 mt-md-4" data-aos="fade-up">
                            <button type="button" className="btn tertiary-btn btn-lg px-4">Contact now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
