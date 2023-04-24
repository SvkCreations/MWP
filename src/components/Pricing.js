import React, { useState } from 'react'
import FAQ from './FAQ'

export default function Pricing() {

    const type = ["Static", "Dynamic"];
    const pages = ["3-5", "5+"];
    const domType = ['.in','.com'];
    const ssl = ['Yes', 'No'];
    const profEmail = ['0','2','5','10'];
    const domProtec = ['Yes', 'No'];
    const storage = ['1GB', '2GB'];

    const [selectedType, setSelectedType] = useState(type[0]);
    const [selectedPages, setSelectedPages] = useState(pages[0]);
    const [selectedDomType, setSelectedDomType] = useState(domType[0]);
    const [selectedSsl, setSelectedSsl] = useState(ssl[0]);
    const [selectedProfEmail, setSelectedProfEmail] = useState(profEmail[0]);
    const [selectedDomProtec, setSelectedDomProtec] = useState(domProtec[0]);
    const [selectedStorage, setSelectedStorage] = useState(storage[0]);

    const [typePrice, setTypePrice] = useState(6000);
    const [pagesPrice, setPagesPrice] = useState(6000);
    const [domPrice, setDomPrice] = useState(1600);
    const [sslPrice, setSslPrice] = useState(2300);
    const [emailPrice, setEmailPrice] = useState(0);
    const [domProtecPrice, setDomProtecPrice] = useState(1300);
    const [storagePrice, setStoragePrice] = useState(8000);

    let typeChange = (e)=>{
        setSelectedType(e.target.value);
        console.log(selectedType)
        setTypePrice(8000);
    }
    let pagesChange = (e)=>{
        setSelectedPages(e.target.value);
        console.log(selectedPages)
        setPagesPrice(8000);
    }
    let domTypeChange = (e)=>{
        setSelectedDomType(e.target.value);
        setDomPrice(2600);
    }
    let sslChange = (e)=>{
        setSelectedSsl(e.target.value);
        setSslPrice(0);
    }
    let emailChange = (e)=>{
        setSelectedProfEmail(e.target.value);
        console.log(selectedProfEmail)
        if(selectedProfEmail==="2"){
            setEmailPrice(1700)
        }
        else if(selectedProfEmail==="5"){
            setEmailPrice(4250)
        }
        else if(selectedProfEmail==="10"){
            setEmailPrice(8500)
        }
        else if(selectedProfEmail==="0"){
            setEmailPrice(0)
        }
    }
    let domProtecChange = (e)=>{
        setSelectedDomProtec(e.target.value);
        setDomProtecPrice(1300);
    }
    let storageChange = (e)=>{
        setSelectedStorage(e.target.value);
        setStoragePrice(13000);
    }

    let price = typePrice+pagesPrice+domPrice+sslPrice+emailPrice+domProtecPrice+storagePrice;



    




    return (
        <div>
            <h2 className="display-6 fw-bold mt-5">Here in <span className='text-prm'>MWP</span>, you get the <br /><span className='text-prm'>best prices</span> for your digital products.</h2>
            <div className="row row-cols-1 row-cols-md-3 mt-5 text-center">
                <div className="col">
                    <div className="card mb-4 shadow-sm text-bg-dark" style={{ border: '2px solid #00ffb9' }}>
                        <div className='px-4 pt-4 head'>
                            <h2 className="fw-bold">Static Website</h2>
                            <hr></hr>
                        </div>
                        <div className='body'>
                            <h2 className="fw-bold text-prm">INR 29,999</h2>
                            <ul className='list-unstyled mt-3'>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>Responsive Website</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>3-5 pages web application</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>.com Domain*</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>SSL Cerificate</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>2 Professional E-mail IDs</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>Full domain Protection</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>VPS Hosting with 1GB storage for 2 years</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>IT support</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">close</span>Dedicated database</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">close</span>Chat implementation</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">close</span>Payment Gateway</li>
                            </ul>
                            <button className="btn primary-btn col-10 my-4">Go with this plan</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm" style={{ backgroundColor: '#00ffb9' }}>
                        <div className='px-4 pt-4 head'>
                            <h2 className="fw-bold">Dynamic Website</h2>
                            <hr></hr>
                        </div>
                        <div className='body'>
                            <h2 className="fw-bold">INR 39,999</h2>
                            <ul className='list-unstyled mt-3'>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>Responsive Website</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>5+ pages web application</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>.com Domain*</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>SSL Cerificate</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>5 Professional E-mail IDs</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>Full domain Protection</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>VPS Hosting with 2GB storage for 2 years</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>IT support</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>Dedicated database</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">close</span>Chat implementation</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">close</span>Payment Gateway</li>
                            </ul>
                            <button className="btn accent-btn col-10 my-4">Go with this plan</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-4 shadow-sm text-bg-dark" style={{ border: '2px solid #00ffb9' }}>
                        <div className='px-4 pt-4 head'>
                            <h2 className="fw-bold">E-Commerce Website</h2>
                            <hr></hr>
                        </div>
                        <div className='body'>
                            <h2 className="fw-bold text-prm">INR 49,999</h2>
                            <ul className='list-unstyled mt-3'>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>Responsive Website</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>5+ pages web application</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>.com Domain*</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>SSL Cerificate</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>10 Professional E-mail IDs</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>Full domain Protection</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>VPS Hosting for 2 years</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>IT support</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>Dedicated database</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>Chat implementation</li>
                                <li className='d-flex align-items-center justify-content-center gap-2'><span className="material-symbols-outlined">done</span>Payment Gateway</li>
                            </ul>
                            <button className="btn primary-btn col-10 my-4">Go with this plan</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className='mt-2 mb-5'>* If you want domains other that .com, prices can vary.</p>

            <FAQ />
        </div>
    )
}
