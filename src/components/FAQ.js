import React from 'react'

export default function FAQ() {
    return (
        <div className='mt-5'>
            <h2 className="display-6 fw-bold">FAQs</h2>
            <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-5 pt-4">
                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden" style={{ background: 'none' }}>
                        <div className="d-flex flex-column h-100 text-shadow-1 text-white">
                            <div data-aos="fade-up">
                                <h3 className="fw-bold">What's the difference between a Static and a Dynamic website?</h3>
                                <p>The difference between static websites and dynamic websites is that static websites appear the same for every user that accesses them and only change when a developer modifies the source files, whereas dynamic websites can present different information to different visitors.</p>
                                <hr />
                            </div>
                            <div data-aos="fade-up">
                                <h3 className="fw-bold mt-4">What is a Responsive Website?</h3>
                                <p>Responsive web design is about creating web pages that look good on all devices! A responsive web design will automatically adjust for different screen sizes and viewports.</p>
                                <hr />
                            </div>
                            <div data-aos="fade-up">
                                <h3 className="fw-bold mt-4">What is an SSL certificate?</h3>
                                <p>An SSL certificate is a digital certificate that authenticates a website's identity and enables an encrypted connection. SSL stands for Secure Sockets Layer, a security protocol that creates an encrypted link between a web server and a web browser. Companies and organizations need to add SSL certificates to their websites to secure online transactions and keep customer information private and secure.</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card card-cover h-100 overflow-hidden" style={{ background: 'none' }} >
                        <div className="d-flex flex-column h-100 text-shadow-1 text-white">
                            <div data-aos="fade-up">
                                <h3 className="fw-bold">What is VPS hosting?</h3>
                                <p>To make a website available online, its files need to be uploaded to a web server, which is typically purchased from a hosting provider. This service is known as web hosting. VPS hosting is a type of hosting suited for people who have outgrown shared hosting. Where multiple sites reside on a single web server with shared hosting, and have no guarantee of resources, VPS allows fewer users to share allocated segments of hard drive space, memory, and processor power. Each user on a VPS server has access to a virtual machine running its own copy of an operating system (OS). This allows customers using VPS hosting to experience similar capabilities and performance to a dedicated server for their sites</p>
                                <hr />
                            </div>
                            <div data-aos="fade-up">
                                <h3 className="fw-bold mt-4">Why do we require Full Domain Protection?</h3>
                                <p>Domain Protection helps secure your domain by preventing unauthorized domain actions, such as transferring a domain or making DNS updates, and avoiding accidental domain expiration if your credit card on file expires.</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
