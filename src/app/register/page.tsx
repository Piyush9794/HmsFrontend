import UserRegister from '@/Components/Common/UserRegister'
import FooterSection from '@/Components/landingPage/FooterSection'
import Navbar from '@/Components/landingPage/Navbar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <UserRegister/>
      <FooterSection/>
    </div>
  )
}

export default page