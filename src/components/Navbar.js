import React from 'react';
import logo from '../Logo.png';

export default function Navbar() {
    return (
        <div className='mt-3'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="Morpheous Webplanners logo" width='200' className="img-fluid" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="me-auto">

                        </div>
                        <div>
                            <ul className='navbar-nav mb-2 mb-lg-0'>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item mx-0 mx-md-3">
                                    <a className="nav-link" href="#">Work</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Capabilites</a>
                                </li>
                                <li className="nav-item mx-0 mx-md-3">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item mx-0 mx-md-3">
                                    <a className="nav-link" href="#">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-prm d-flex align-items-center" href='tel: +91 98315 81878'><span className="material-symbols-outlined mx-0 mx-md-1">
                                        smartphone
                                    </span>+91 98315 81878</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
