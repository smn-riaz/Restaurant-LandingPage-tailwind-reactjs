
import React from 'react'
import Navbar from '../Components/Navbar'
import Blog from './Blog'
import Chef from './Chef'
import Contact from './Contact'
import ExclusiveItems from './ExclusiveItems'
import FooterSection from './FooterSection'
import OurHistory from './OurHistory'
import PopularMenu from './PopularMenu'
import Testimonial from './Testimonial'
import TopBanner from './TopBanner'
import ScrollToTop from "react-scroll-to-top";

const LandingPage = () => {
  return (
    <main>
        <TopBanner />
        <ExclusiveItems />
        <OurHistory />
        <PopularMenu />
        <Chef />
        {/* <Testimonial /> */}
        <Blog />
        <Contact />
        <FooterSection />
        <ScrollToTop smooth color='#D03801'/>

    </main>
  )
}

export default LandingPage