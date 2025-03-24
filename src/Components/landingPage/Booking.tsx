"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    department: yup.string().required(),
    doctor: yup.string().required(),
    date: yup.date().required(),
    time: yup.string().required(),
    name: yup.string().required(),
    phone: yup.string().required(),
    message: yup.string().required()
})

function Booking() {
    const { handleSubmit, register, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-10 mx-auto" id='Outer_Service'>
                        <div className="row">
                            <div className="col-sm-5">
                                <img src="\images\images\about\img-3.jpg" alt="" className='img-fluid rounded-3 shadow-lg Service_Img' />
                            </div>
                            <div className="col-sm-7 px-5 py-4">
                                <h1 className='bluecolor fw-bolder'>Book appoinment</h1>
                                <p className='opacity-75 mb-4'>Mollitia dicta commodi est recusandae iste, natus eum asperiores corrupti qui velit . Iste dolorum atque similique praesentium soluta.</p>
                                <form onSubmit={handleSubmit((d) => console.log(d))}>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <select className={errors.department ? "form-select is-invalid" : "form-select"} {...register("department")}>
                                                <option>Choose Department</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            {errors.department && <p className='invalid-feedback'>{errors.department.message}</p>}
                                        </div>
                                        <div className="col-sm-6">
                                            <select className={errors.doctor ? "form-select is-invalid" : "form-select"} {...register("doctor")}>
                                                <option>Choose Doctors</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            {errors.doctor && <p className='invalid-feedback'>{errors.doctor.message}</p>}
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="date" className={errors.date ? "form-control is-invalid" : "form-select"} {...register("date")} />
                                            {errors.date && <p className='invalid-feedback'>{errors.date.message}</p>}
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" placeholder='Time' className={errors.time ? "form-control is-invalid" : "form-select"} {...register("time")} />
                                            {errors.time && <p className='invalid-feedback'>{errors.time.message}</p>}
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" placeholder='Full Name' className={errors.name ? "form-control is-invalid" : "form-select"} {...register("name")} />
                                            {errors.name && <p className='invalid-feedback'>{errors.name.message}</p>}
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" placeholder='Phone Number' className={errors.phone ? "form-control is-invalid" : "form-select"} {...register("phone")} />
                                            {errors.phone && <p className='invalid-feedback'>{errors.phone.message}</p>}
                                        </div>
                                        <div className="col-sm-12">
                                            <textarea placeholder='Your Message' className={errors.message ? "form-control is-invalid" : "form-select"} rows={7} {...register("message")}></textarea>
                                            {errors.message && <p className='invalid-feedback'>{errors.message.message}</p>}
                                        </div>
                                    </div>
                                    <button className='btn1-sm mt-3'>MAKE APPOINTMENT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking