import React from 'react'

function Feedback() {
    return (
        <>
            <div className="container-fluid bg-light OuterFeedBack">
                <div className="row">
                    <div className="col-sm-10 mx-auto">
                        <div className="row">
                            <div className="col-sm-6 mx-auto ">
                                <h1 className='text-center bluecolor fw-bolder'>We served over 5000+ Patients</h1>
                                <div className='line mx-auto my-4'></div>
                                <p className='text-center opacity-75  mt-4 mb-5'>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                            </div>
                        </div>



                        <div id="carouselExampleIndicators" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-indicators position-absolute d-sm-block d-none text-center">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={0}
                                    className="active bg-dark rounded-circle"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={1}
                                    aria-label="Slide 2"
                                    className='bg-dark rounded-circle mx-3'
                                />
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={2}
                                    aria-label="Slide 3"
                                    className='bg-dark rounded-circle'
                                />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="row">
                                                <div className="col-sm-11 px-5 py-4 mx-auto FeedBAck_Box rounded-3">
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <img src="/images/images/team/test-thumb1.jpg" alt="" className='rounded-circle img-fluid' />
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <h2>Amazing service!</h2>
                                                            <p className='opacity-75'>John Partho</p>
                                                        </div>
                                                        <div className="col-sm-12 mt-3">
                                                            <p className='fs-5 opacity-75'>They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 d-sm-block d-none">
                                            <div className="row">
                                                <div className="col-sm-11 px-5 py-4 mx-auto feedbackbox rounded-3">
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <img src="/images/images/team/test-thumb2.jpg" alt="" className='rounded-circle' />
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <h2>Expert doctors!</h2>
                                                            <p className='opacity-75'>Mullar Sarth</p>
                                                        </div>
                                                        <div className="col-sm-12 mt-3">
                                                            <p className='fs-5 opacity-75'>They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                <div className="row">
                                        <div className="col-sm-6">
                                            <div className="row">
                                                <div className="col-sm-11 px-5 py-4 mx-auto feedbackbox rounded-3">
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <img src="/images/images/team/test-thumb3.jpg" alt="" className='rounded-circle' />
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <h2>Good Support!</h2>
                                                            <p className='opacity-75'>Kolis Mullar</p>
                                                        </div>
                                                        <div className="col-sm-12 mt-3">
                                                            <p className='fs-5 opacity-75'>They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 d-sm-block d-none">
                                            <div className="row">
                                                <div className="col-sm-11 px-5 py-4 mx-auto feedbackbox rounded-3">
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <img src="/images/images/team/test-thumb4.jpg" alt="" className='rounded-circle' />
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <h2>Nice Environment!</h2>
                                                            <p className='opacity-75'>Partho Sarothi</p>
                                                        </div>
                                                        <div className="col-sm-12 mt-3">
                                                            <p className='fs-5 opacity-75'>They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                <div className="row">
                                        <div className="col-sm-6 d-sm-block d-none">
                                            <div className="row">
                                                <div className="col-sm-11 px-5 py-4 mx-auto feedbackbox rounded-3">
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <img src="/images/images/team/test-thumb1.jpg" alt="" className='rounded-circle' />
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <h2>Amazing service!</h2>
                                                            <p className='opacity-75'>John Partho</p>
                                                        </div>
                                                        <div className="col-sm-12 mt-3">
                                                            <p className='fs-5 opacity-75'>They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="row">
                                                <div className="col-sm-11 px-5 py-4 mx-auto feedbackbox rounded-3">
                                                    <div className="row">
                                                        <div className="col-sm-3">
                                                            <img src="/images/images/team/test-thumb2.jpg" alt="" className='rounded-circle' />
                                                        </div>
                                                        <div className="col-sm-9">
                                                            <h2>Amazing service!</h2>
                                                            <p className='opacity-75'>John Partho</p>
                                                        </div>
                                                        <div className="col-sm-12 mt-3">
                                                            <p className='fs-5 opacity-75'>They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback