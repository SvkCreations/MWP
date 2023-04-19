import React from 'react'

export default function WhatWeDo() {
    return (
        <div className='mt-3 mt-md-5'>
            <h2 className="display-5 fw-bold">What we do</h2>
            <div id="custom-cards">
                <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-4">
                    <div className="col" data-aos="fade-up" >
                        <div className="card card-cover h-100 overflow-hidden shadow-lg" style={{ 'background': 'none', 'border': '1px solid #00ffb9' }}>
                            <div className="d-flex flex-column h-100 p-4 pb-3 text-white text-shadow-1">
                                <h2 className="lead fw-bold d-flex align-items-center gap-3"><span style={{ fontSize: '42px' }} className="material-symbols-outlined">
                                    branding_watermark
                                </span>BRAND DESIGN</h2>
                                <p>Breakthrough ideas don't happen by accident - we engage in friendly consultation, research and make strategy development to make your message shine. Once we understand what drives and defines your business, we look at where you stand in our local environment and industry sector and then implement various technical and creative strategies.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col" data-aos="fade-up" >
                        <div className="card card-cover h-100 overflow-hidden shadow-lg" style={{ 'background': '#00ffb9', 'border': '2px solid #00ffb9' }}>
                            <div className="d-flex flex-column h-100 p-4 pb-3 text-dark text-shadow-1">
                                <h2 className="lead fw-bold d-flex align-items-center gap-3"><span className="material-symbols-outlined" style={{ fontSize: '42px' }}>
                                    code
                                </span>WEB DESIGN & DEVELPOMENT</h2>
                                <p>We specialize in creating beautiful, modern websites that are easy to use and navigate. Our team of experienced web designers and developers will work with you to create a website that meets your needs and exceeds your expectations. We strive to provide the highest quality of service and customer satisfaction. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col" data-aos="fade-up" >
                        <div className="card card-cover h-100 overflow-hidden shadow-lg" style={{ 'background': 'none', 'border': '2px solid #00ffb9' }}>
                            <div className="d-flex flex-column h-100 p-4 pb-3 text-white text-shadow-1">
                                <h2 className="lead fw-bold d-flex align-items-center gap-3"><span className="material-symbols-outlined" style={{ fontSize: '42px' }}>
                                    dns
                                </span>WEB HOSTING</h2>
                                <p>We offer a range of hosting services, including shared hosting, VPS hosting, and dedicated servers. Our servers are located in secure data centers around the world, ensuring that your data is always safe and secure. We also offer a range of managed services, such as server monitoring and maintenance, to ensure that your website is always running smoothly. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col" data-aos="fade-up">
                        <div className="card card-cover h-100 overflow-hidden shadow-lg" style={{ 'background': 'none', 'border': '2px solid #00ffb9'}}>
                        <div className="d-flex flex-column h-100 p-4 pb-3 text-white text-shadow-1">
                                <h2 className="lead fw-bold d-flex align-items-center gap-3"><span className="material-symbols-outlined" style={{ fontSize: '42px' }}>
                                    shopping_bag
                                </span>E-COMMERCE WEBSITE</h2>
                                <p>We are a team of experienced web developers and designers specializing in creating e-commerce websites. We understand the importance of having a website that is both visually appealing and easy to use. We strive to create websites that are tailored to the needs of our clients, with a focus on usability and customer satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
