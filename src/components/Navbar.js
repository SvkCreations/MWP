import React from 'react';
import logo from '../Logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='mt-3'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="Morpheous Webplanners logo" width='200' className="img-fluid" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="me-auto">

                        </div>
                        <div>
                            <ul className='navbar-nav mb-2 mb-lg-0'>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item mx-0 mx-md-3">
                                    <Link className="nav-link" to="work">Work</Link>
                                </li>
                                <li className="nav-item mx-0 me-md-3">
                                    <Link className="nav-link" to="price">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="contact">Contact</Link>
                                </li>
                                <li className="nav-item mx-0 mx-md-3">
                                    <Link className="nav-link" to="#">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-prm d-flex align-items-center" href='tel: +91 98315 81878'><span className="material-symbols-outlined mx-0 mx-md-1">
                                        smartphone
                                    </span>+91 98315 81878</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
