import React from 'react'
import { FaUserNurse } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";

function Carousel() {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 Background_image">
                        <div className="row">
                            <div className="col-sm-10 mx-auto">
                                <div className="row">
                                    <div className="col-sm-6 left-text d-flex flex-column justify-content-center align-items-start">
                                    <div className='line my-4'></div>
                                        <p id='Chop1'>Total Health care solution</p>
                                        <h2 id='h2'>Your most trusted health partner</h2>
                                        <p id='Chop2'>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                                        <button className='btn1 mt-3'>MAKE APPOINTMENT</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-10 mx-auto" id='Container_Box'>
                        <div className="row g-4">
                            <div className="col-sm-4 " >
                                <div className="row">
                                    <div className="col-sm-11 bg-light shadow-lg mx-auto box rounded-4"  >
                                        <div className="row">
                                            <div className="col-sm-12 py-4 px-5">
                                                <FaUserNurse className='fs-1' />
                                                <p className='mt-3'>24 Hours Service</p>
                                                <h3 className='mb-3'>Online Appoinment</h3>
                                                <p>Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
                                                <button className='btn1 mt-3'>MAKE A APPOINTMENT</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-11 bg-light shadow-lg mx-auto box rounded-4 py-4 px-5">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <FaClock className='fs-1' />
                                                <p className='mt-3'>Timing schedule</p>
                                                <h3 className='mb-3'>Working Hours</h3>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">Sun - Wed :</div>
                                            <div className="col-6 text-end">8:00 - 17:00</div>
                                            <hr className='mt-2' />
                                            <div className="col-6">Thu - Fri :</div>
                                            <div className="col-6 text-end">9:00 - 17:00</div>
                                            <hr className='mt-2' />
                                            <div className="col-6">Sat - sun :</div>
                                            <div className="col-6 text-end">10:00 - 17:00</div>
                                            <hr className='mt-2' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-11 bg-light shadow-lg mx-auto box rounded-4 py-4 px-5"  >
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <RiCustomerServiceFill className='fs-1' />
                                                <p className='mt-3'>Emegency Cases</p>
                                                <h3 className='mb-3'>1-800-700-6200</h3>
                                                <p>Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .</p>
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

export default Carousel