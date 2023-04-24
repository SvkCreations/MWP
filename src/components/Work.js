import React from 'react';
import work1 from '../Work - 1.png';
import work2 from '../Work - 2.png';

export default function Work() {
    return (
        <div>
            <h2 className="display-5 fw-bold mt-5 col-12 col-lg-3">We let our <span className='text-prm'>works speak</span> for us.</h2>
            <p className="lead">Take a look at some of our Awesome works. Just click on anyone to see it live and then decide.</p>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-4">
                <div className="col">
                    <div className="work card card-cover h-100 overflow-hidden shadow-lg" style={{background:'none'}}>
                        <div className="d-flex flex-column h-100 p-4 p-md-5 pb-3 text-shadow-1">
                            <h2 className="fw-bold">Kanasa Weddings</h2>
                            <p >A responsive website for a Wedding planner company called "Kanasa Weddings". From ideation to hosting, from design to coding, everything about this website was done by our expert team.</p>

                            <img src={work1} alt="" className="img-fluid" />

                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="work card card-cover h-100 overflow-hidden shadow-lg" style={{background:'none', border: '2px solid #00ffb9'}}>
                        <div className="d-flex flex-column h-100 p-4 p-md-5 pb-3 text-shadow-1">
                            <h2 className="fw-bold">Tahia Weds Aalif</h2>
                            <p>A responsive website for a Wedding where people can RSVP, Explore areas nearby the wedding venue and also book hotels near the venue. </p>

                            <img src={work1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="work card card-cover h-100 overflow-hidden shadow-lg"  style={{background:'none'}}>
                        <div className="d-flex flex-column h-100 p-4 p-md-5 pb-3 text-shadow-1">
                            <h2 className="fw-bold">Morpheous Planners</h2>
                            <p>A responsive website for a Event management company that deal with Corporate events, Social Events, Product Launch etc. From ideation to hosting, from design to coding, everything about this website was done by our expert team.</p>

                            <img src={work2} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
