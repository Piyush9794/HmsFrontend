import React from 'react'
import Navbar from '@/Components/landingPage/Navbar'
import ResetPassword from '@/Components/Common/ResetPassword'
import FooterSection from '@/Components/landingPage/FooterSection'
const page = () => {
  return (
    <div>
      <Navbar />
      <ResetPassword />
      <FooterSection />
    </div>
  )
}

export default page