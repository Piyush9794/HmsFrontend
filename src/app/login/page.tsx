import React from 'react'
import UserLogin from '@/Components/Common/UserLogin'
import Navbar from '@/Components/landingPage/Navbar'
import FooterSection from '@/Components/landingPage/FooterSection'
const page = () => {
  return (
   <>
   <Navbar/>
   <UserLogin/>
   <FooterSection/>
   </>
  )
}

export default page