"use client"
import React from 'react'
import UserLogin from '@/Components/Common/UserLogin'
import Navbar from '@/Components/landingPage/Navbar'
import FooterSection from '@/Components/landingPage/FooterSection'
import DropdownSwitcher from '@/Components/Common/DropdownSwitcher'
const page = () => {
  return (
    <>
      <Navbar />
      <DropdownSwitcher />
      <FooterSection />
    </>
  )
}

export default page