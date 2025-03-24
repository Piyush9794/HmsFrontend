import React from 'react'
import { LuMessageCircleMore } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { IoLocation } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import Link from 'next/link';

function Navbar() {
    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-sm-12" id='ufooter1' >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-6 mt-2">
                                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                    <li className="list-inline-item me-5">
                                        <a href="mailto:support@gmail.com" className="no-style anchor1 me-4">
                                            <i className="icofont-support-faq mr-2" />
                                            <CgMail className='fs-4 ' /> support@hms.com
                                        </a>
                                    </li>
                                    <li className="list-inline-item ">
                                        <i className="icofont-location-pin mr-2" />
                                        <IoLocation className='fs-5' />  Address Sitapur Road,Lucknow, Up{" "}
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4 mt-2">
                                <div className="text-lg-right top-right-bar mt-lg-0">
                                    <a href="tel:+23-345-67890" className="anchor1">
                                        <span><MdAddCall className='fs-4 me-1' /> </span>
                                        <span className="h5">823-4565-13456</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="row nav2">
                <div className="col-sm-10 mx-auto">
                    <div className="row">
                        <div className="col-sm-5">
                            <img src="/images/images/logo.png" className='img-fluid mt-3' />
                        </div>
                        <div className="col-sm-7 me-0">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarNavDropdown"
                                        aria-controls="navbarNavDropdown"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon" />
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul className="navbar-nav d-flex">
                                            <li className="nav-item me-3">
                                                <Link className="nav-link active" aria-current="page" href="#">
                                                Home
                                                </Link>
                                            </li>
                                            <li className="nav-item me-3">
                                                <Link className="nav-link" href="src\app\about">
                                                    About
                                                </Link>
                                            </li>
                                            <li className="nav-item me-3">
                                                <Link className="nav-link" href="#">
                                                    Services
                                                </Link>
                                            </li>

                                            <li className="nav-item dropdown me-3">
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Department
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link className="dropdown-item" href="#">
                                                            Action
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" href="#">
                                                            Another action
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" href="#">
                                                            Something else here
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item dropdown me-3">
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Doctors
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link className="dropdown-item" href="#">
                                                            Action
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" href="#">
                                                            Another action
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" href="#">
                                                            Something else here
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown me-3">
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    href="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Blog
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link className="dropdown-item" href="#">
                                                            Action
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" href="#">
                                                            Another action
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" href="#">
                                                            Something else here
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item me-3">
                                                <Link className="nav-link" aria-current="page" href="#">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar