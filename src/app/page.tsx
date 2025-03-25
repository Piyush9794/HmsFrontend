import Image from "next/image";
import AwardSection from "@/Components/landingPage/AwardSection";
import Booking from "@/Components/landingPage/Booking";
import Carousel from "@/Components/landingPage/Carousel";
import Count from "@/Components/landingPage/Count";
import Feedback from "@/Components/landingPage/Feedback";
import FooterSection from "@/Components/landingPage/FooterSection";
import Partners from "@/Components/landingPage/Partners";
import PersonalCare from "@/Components/landingPage/PersonalCare";
import Services from "@/Components/landingPage/Services";
import Navbar from "@/Components/landingPage/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <PersonalCare />
      <Count />
      <AwardSection />
      <Booking />
      <Feedback />
      <Partners />
      <FooterSection />

    </>
  );
}
