import React from 'react';
import logo from '../Logo-black.png';

export default function Footer() {
  return (
    <div style={{backgroundColor:'#00ffb9'}} className='mt-5'>
      <footer className="pt-5 px-4 px-md-5">
    <div className="row px-md-5">
      <div className="col-12 col-md-3 mb-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><img src={logo} width='200' alt="" className="img-fluid" /></li>
          <li className="nav-item mb-2 fw-bold mt-4"><a href="#" className="nav-link p-0 text-body-secondary">106, Golf Club Road, Tollygunge, <br></br>Kolkata - 700033</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-1 mb-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-body-secondary" style={{textDecoration:'underline'}}>Home</a></li>
          <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-body-secondary" style={{textDecoration:'underline'}}>Work</a></li>
          <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-body-secondary" style={{textDecoration:'underline'}}>Capabilities</a></li>
          <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-body-secondary" style={{textDecoration:'underline'}}>Report a Bug</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <ul className="nav flex-column">
          <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-body-secondary" style={{textDecoration:'underline'}}>Pricing</a></li>
          <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-body-secondary" style={{textDecoration:'underline'}}>Contact</a></li>
          <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-body-secondary" style={{textDecoration:'underline'}}>About Us</a></li>
          <li className="nav-item mb-2 fw-bold"><a href="#" className="nav-link p-0 text-body-secondary" style={{textDecoration:'underline'}}>Developer Contact</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form className='text-dark'>
          <h5 className='fw-bold'>Subscribe to our newsletter</h5>
          <p>Get to know what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" style={{borderRadius:0}}/>
            <button className="btn accent-btn" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top px-md-5 text-dark">
      <p>© 2023 Morpheous Webplanners. All rights reserved.</p>
      {/* <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul> */}
    </div>
  </footer>
    </div>
  )
}
