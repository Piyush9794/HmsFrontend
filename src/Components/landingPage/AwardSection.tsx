import React from 'react'
import { IoIosFlask } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
import { BiDna } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";
import { IoBody } from "react-icons/io5";
import { TbDentalBroken } from "react-icons/tb";

function AwardSection() {
    return (
        <>
            <div className="container-fluid bg-light AwardSectionOuter1">
                <div className="row">
                    <div className="col-sm-10 mx-auto">
                        <div className="row">
                            <div className="col-sm-6 mx-auto">
                                <h1 className='text-center bluecolor fw-bolder'>Award winning patient care</h1>
                                <div className='line mx-auto my-4'></div>
                                <p className='text-center opacity-75  mt-4 mb-5'>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-11 mx-auto awardbox px-5 py-4 rounded-3 shadow-lg">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <IoIosFlask className='AwardIcon1 redcolor' />
                                            </div>
                                            <div className="col-sm-9">
                                                <h4 className='mt-3'>Laboratory services</h4>
                                            </div>
                                        </div>
                                        <p className='mt-3'>
                                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-11 mx-auto awardbox px-5 py-4 rounded-3 shadow-lg">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <FaHeartbeat className='AwardIcon1 redcolor' />
                                            </div>
                                            <div className="col-sm-9">
                                                <h4 className='mt-3'>Heart Disease</h4>
                                            </div>
                                        </div>
                                        <p className='mt-3'>
                                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-11 mx-auto awardbox px-5 py-4 rounded-3 shadow-lg">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <TbDentalBroken className='AwardIcon1 redcolor' />
                                            </div>
                                            <div className="col-sm-9">
                                                <h4 className='mt-3'>Dental Care</h4>
                                            </div>
                                        </div>
                                        <p className='mt-3'>
                                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-11 mx-auto awardbox px-5 py-4 rounded-3 shadow-lg">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <IoBody className='AwardIcon1 redcolor' />
                                            </div>
                                            <div className="col-sm-9">
                                                <h4 className='mt-3'>Body Surgery</h4>
                                            </div>
                                        </div>
                                        <p className='mt-3'>
                                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-11 mx-auto awardbox px-5 py-4 rounded-3 shadow-lg">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <GiBrain className='AwardIcon1 redcolor' />
                                            </div>
                                            <div className="col-sm-9">
                                                <h4 className='mt-3'>Neurology Sargery</h4>
                                            </div>
                                        </div>
                                        <p className='mt-3'>
                                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-11 mx-auto awardbox px-5 py-4 rounded-3 shadow-lg">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <BiDna className='AwardIcon1 redcolor' />
                                            </div>
                                            <div className="col-sm-9">
                                                <h4 className='mt-3'>Gynecology</h4>
                                            </div>
                                        </div>
                                        <p className='mt-3'>
                                            Saepe nulla praesentium eaque omnis perferendis a doloremque.
                                        </p>
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

export default AwardSection

