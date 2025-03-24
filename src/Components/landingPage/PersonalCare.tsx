import React from 'react'

function PersonalCare() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-10 mx-auto">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-11 mx-auto">
                                        <div className="row g-4">
                                            <div className="col-sm-12">
                                                <img src="\images\images\about\img-1.jpg" alt="" className='img-fluid rounded-3 shadow' />
                                            </div>
                                            <div className="col-sm-12">
                                                <img src="\images\images\about\img-2.jpg" alt="" className='img-fluid rounded-3 shadow' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-12 mx-auto d-flex mt-5">
                                        <img src="\images\images\about\img-3.jpg" alt="" className='img-fluid rounded-3 shadow' />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex flex-column justify-content-center ps-5">
                                <h1 className='fw-bolder bluecolor'>Personal care & healthy living</h1>
                                <p className='my-4 opacity-75'>We provide best leading medicle service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.</p>
                                <button className='cbtn-sm mt-3 fw-bold'>SERVICES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalCare