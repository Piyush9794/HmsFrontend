import React from 'react'

function Count() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-10 mx-auto Outer_Count mt-5">
                    <div className="row">
                        <div className="col-sm-12 InnerCount">
                            <div className="row">
                                <div className="col-sm-3 col-6 text-center mt-5">
                                    <h1>58<span className='fs-5'>k</span></h1>
                                    <p className='text-light'>Happy People</p>
                                </div>
                                <div className="col-sm-3 col-6 text-center mt-5">
                                    <h1>700<span className='fs-5'>+</span></h1>
                                    <p className='text-light'>Surgery Comepleted</p>
                                </div>
                                <div className="col-sm-3 col-6 text-center mt-5">
                                    <h1>40<span className='fs-5'>+</span></h1>
                                    <p className='text-light'>Expert Doctors</p>
                                </div>
                                <div className="col-sm-3 col-6 text-center mt-5">
                                    <h1>20</h1>
                                    <p className='text-light'>Worldwide Branch</p>
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

export default Count