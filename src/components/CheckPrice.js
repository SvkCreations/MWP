import React from 'react'

export default function CheckPrice() {
  return (
    <div>
      <div>
                <h2 className="display-6 fw-bold">Don't want all items <br />mentioned in the Pricing list?</h2>
                <p className="lead">Calculate on your own.</p>
                <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-3">
                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden" style={{ background: 'none' }}>
                            <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                <label className='py-2' htmlFor="#responsive">Responsiveness of the Website</label>
                                <select className="form-select" aria-label="Disabled select example" disabled id='responsive'>
                                    <option selected>Responsive</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden" style={{ background: 'none' }}>
                            <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                    <label className='py-2' htmlFor="#type">Type of the Website</label>
                                    <select className="form-select" aria-label="Disabled select example" id='type' value={selectedType} onChange={typeChange}>
                                        {type.map((value)=>(
                                            <option value={value} key={value}>{value}</option>
                                            ))}
                                         
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden" style={{ background: 'none' }}>
                            <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                    <label className='py-2' htmlFor="#type">No. of Pages</label>
                                    <select className="form-select" aria-label="Disabled select example" id='type' value={selectedPages} onChange={e=>pagesChange(e)}>
                                    {pages.map((value)=>(
                                            <option value={value} key={value}>{value}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden" style={{ background: 'none' }}>
                            <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                    <label className='py-2' htmlFor="#type">Domain type</label>
                                    <select className="form-select" aria-label="Disabled select example" id='type' value={selectedDomType} onChange={e=>domTypeChange(e)}>
                                    {domType.map((value)=>(
                                            <option value={value} key={value}>{value}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden" style={{ background: 'none' }}>
                            <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                    <label className='py-2' htmlFor="#type">Need SSL Certificate</label>
                                    <select className="form-select" aria-label="Disabled select example" id='type' value={selectedSsl} onChange={e=>sslChange(e)}>
                                    {ssl.map((value)=>(
                                            <option value={value} key={value}>{value}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden" style={{ background: 'none' }}>
                            <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                    <label className='py-2' htmlFor="#type">Number of Professional E-mails</label>
                                    <select className="form-select" aria-label="Disabled select example" id='type' value={selectedProfEmail} onChange={e=>emailChange(e)}>
                                    {profEmail.map((value)=>(
                                            <option value={value} key={value}>{value}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden" style={{ background: 'none' }}>
                            <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                    <label className='py-2' htmlFor="#type">Is Full domain Protection Required</label>
                                    <select className="form-select" aria-label="Disabled select example" id='type' value={selectedDomProtec} onChange={e=>domProtecChange(e)}>
                                    {domProtec.map((value)=>(
                                            <option value={value} key={value}>{value}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card card-cover h-100 overflow-hidden" style={{ background: 'none' }}>
                            <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                <div className="d-flex flex-column h-100 text-white text-shadow-1">
                                    <label className='py-2' htmlFor="#type">Storage for VPS hosting</label>
                                    <select className="form-select" aria-label="Disabled select example" id='type' value={selectedStorage} onChange={e=>storageChange(e)}>
                                    {storage.map((value)=>(
                                            <option value={value} key={value}>{value}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="lead fw-bold mt-3">Your Price: {price}</h2>

    </div>
  )
}
