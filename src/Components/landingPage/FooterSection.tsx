import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

function FooterSection() {
  return (
    <>
        <div className="container-fluid bg-light footerouter">
            <div className="row">
                <div className="col-sm-10 mx-auto">
                        <div className="row">
                            <div className="col-sm-4 px-5 py-4">
                            <img src="/images/images/logo.png" className='img-fluid'/>
                            <p className='my-4 opacity-75'>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>
                            <div className='d-flex gap-3'>
                            <div className='icon d-flex justify-content-center align-items-center'><FaFacebook className='fs-4 text-light'/></div>
                            <div className='icon d-flex justify-content-center align-items-center'><FaTwitter className='fs-4 text-light'/></div>
                            <div className='icon d-flex justify-content-center align-items-center'><FaLinkedin className='fs-4 text-light'/></div>
                            </div>
                            </div>
                            <div className="col-sm-2  px-5 py-4">
                                <h4 className='bluecolor'>Department</h4>
                                <div className='line my-3'></div>
                                <ul className='list-unstyled d-flex flex-column gap-3 opacity-75'>
                                    <li>Surgery</li>
                                    <li>Wome's Health</li>
                                    <li>Radiology</li>
                                    <li>Cardioc</li>
                                    <li>Medicine</li>
                                </ul>
                            </div>
                            <div className="col-sm-3  px-5 py-4">
                                <h4 className='bluecolor'>Support</h4>
                                <div className='line my-3'></div>
                                <ul className='list-unstyled d-flex flex-column gap-3 opacity-75'>
                                    <li>Terms & Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Company Support</li>
                                    <li>FAQuestions</li>
                                    <li>Company Licence</li>
                                </ul>
                            </div>
                            <div className="col-sm-3  px-5 py-4">
                            <h4 className='bluecolor'>Support</h4>
                            <div className='line my-3'></div>
                            <div className='opacity-75 mt-3 mb-2'><FaEnvelope className='me-3 fs-5'/> <span>Support Available for 24/7</span></div>
                            <h5 className='fw-bolder'>Support@email.com</h5>
                            <div className='opacity-75 mt-3 mb-2'><RiCustomerService2Fill className='me-3 fs-5'/> <span>Mon to Fri : 08:30 - 18:00</span></div>
                            <h5 className='fw-bolder'>+23-456-6588</h5>
                            </div>

                            <hr className='opacity-25'/>
                            <div className="row">
                                <div className="col-sm-12 text-center">
                                    <i>© Copyright Reserved by <b>Zaid</b></i>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FooterSection